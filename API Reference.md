# API文档

**请求编码: UTF-8**

**请求响应格式（header中Content-Type）: 'application/json'**

**请求地址格式: "http://aliyun.1230123.xyz:20080/api/v1/*{Module}/{Method}?token={token}*"**

所有的请求，凡是经过了代码逻辑捕获处理的，HTTP状态码均为200。不通过HTTP状态码表示请求是否成功。

所有成功的请求，按如下格式返回，下文中所示JSON无特殊说明均表示成功状态的data成员的要求。

```json
{
  "success": true,
  "errCode": 0,
  "data": {
    // 填充对应的数据
  }
}
```

所有错误的请求，按如下格式返回，下文中将以表格形式说明错误码对应的含义。

```json
{
	"success": false,
	"errCode": 99999, // 仅为示例，应替换为对应的错误码，类型为整形数字，不是字符串
  "data": {} // 仍要存在data成员，类型为空对象
}
```

| errCode（后端与前端交换的数据） | errDescription（前端展示解释） |
| ------------------------------- | ------------------------------ |
| 99999                           | 未知错误                       |

除特殊标记的方法之外，其余请求均会在query中传递token。各请求在进行处理前，都需要对token是否合法（即在Redis中是否存在与 *{用户ID}* 的对应关系）进行检查。注意普通用户和管理员用户应分别存储，以方便应对Admin模块的请求应判断该token是否对应管理员用户。若不合法，统一返回如下JSON。

```json
{
  "success": false,
  "errCode": 99991,
  "data": {}
}
```

| errCode | errDescription           |
| ------- | ------------------------ |
| 99991   | 登录信息失效，请重新登录 |

## 1. Auth

### 1. login

| Method | Content-Type        | 描述     |
| ------ | ------------------- | -------- |
| POST   | multipart/form-data | 请求登录 |

表单内容**（注：Value类型并非Content Type，下同）**

| Key      | Value类型 | 描述   |
| -------- | --------- | ------ |
| username | String    | 用户名 |
| password | String    | 密码   |

成功返回

```json
{
  "data": {
    "token": "{token}" // 返回已在Redis中保存的token
  }
}
```

错误代码

| errCode | errDescription |
| ------- | -------------- |
| 100101  | 账号或密码错误 |

### 2. register

| Method | Content-Type        | 描述     |
| ------ | ------------------- | -------- |
| POST   | multipart/form-data | 请求注册 |

表单内容

| Key      | Value类型 | 描述   |
| -------- | --------- | ------ |
| username | String    | 用户名 |
| password | String    | 密码   |

成功返回

```json
{
  "data": {} // 空对象
}
```

错误代码

| errCode | errDescription             |
| ------- | -------------------------- |
| 100201  | 该账号已被注册             |
| 100202  | 用户名或密码中包含非法字符 |

### 3. adminLogin

| Method | Content-Type        | 描述     |
| ------ | ------------------- | -------- |
| POST   | multipart/form-data | 请求登录 |

表单内容**（注：Value类型并非Content Type，下同）**

| Key      | Value类型 | 描述   |
| -------- | --------- | ------ |
| username | String    | 用户名 |
| password | String    | 密码   |

成功返回

```json
{
  "data": {
    "token": "{token}" // 返回已在Redis中保存的token，注意该token应分别存储以标记这个token对应的是管理员用户
  }
}
```

错误代码

| errCode | errDescription |
| ------- | -------------- |
| 100101  | 账号或密码错误 |

## 2. Admin


# Redis

## 字符串

### SET

**SET key value [EX seconds][px milliseconds] [NX|XX]**

将字符串值`value`关联到`key`。

如果`key`已经持有其他值，`SET`就覆写旧值，无视类型。

当`SET`命令对一个带有生存时间（TTL)的键进行设置之后，该键原有的 TTL 将被清除。

**可选参数**

- `EX seconds`：将键的过期时间设置为 seconds 秒。执行`SET key value EX seconds` 的效果等同于执行`SETEX key seconds value` 。
- `PX milliseconds`：将键的过期时间设置为`milliseconds`毫秒。执行`SET key value PX milliseconds`的效果等同于执行`PSETEX key milliseconds value`。
- `NX`：只有键不存在时，才对键进行设置操作。执行`SET key value NX`的效果等同于执行`SETNX key value`。
- `XX`：只在键存在时，才对键进行设置操作。

> 因为`SET`命令可通过参数来实现`SETNX`、`SETEX`以及`PSETEX`命令的效果，所以 Redis 将来的版本可能会移除并废弃`SETNX`、`SETEX`、`PSETEX`这三个命令。

```
总结
EX,PX都是set key value EX(PX) time
相当于SETEX(PSETEX) key time value
或者尾部加一个NX代表键不存在时才可操作

```

**返回值**

在 2.6.12 版本以前 SET 命令总是返回 OK。

SET 命令只在设置操作成功完成时才返回 OK；如果命令使用了 NX 或者 XX 选项，但是因为条件没达到而造成设置操作未执行，那么命令将返回空批量回复（NULL Bulk Reply）。

### SETNX

**SETNX key value**

只在键`key`不存在的情况下，将键`key`的值设置为`value`。

若键`key`已经存在，则`SETNX`命令不做任何动作。

`SETNX`是【SET if Not eXists】（如果不存在，则 SET）的简写。

**返回值**

命令在设置成功时返回`1`，设置失败返回`0`。

### SETEX

**SETEX key seconds value**

将键`key`的值设置为`value`，并将键`key`的生存时间设置为`seconds`秒钟。

如果键`key`已经存在，那么`SETEX`命令将覆盖旧值。

`SETEX`命令的效果和以下两个命令的效果类似：

```
SET key value
EXPIRE key seconds //设置生存时间
```

`SETEX`和这两个命令的不同之处在于`SETEX`是一个原子（atomic）操作，它可以在同一时间内完成设置值和设置过期时间这两个操作，因此`SETEX`命令在存储缓存的时候非常实用。

**返回值**

命令在设置成功时返回`OK`。当`seconds`参数不合法时，命令将返回一个错误。

### PSETEX

**PSETEX key milliseconds value**

这个命令和`SETEX`命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像`SETEX`命令那样以秒为单位进行设置。

**返回值**

命令在设置成功时返回`OK`。

### GET key

返回与键`key`相关联的字符串值。

**返回值**

如果键`key`不存在，那么返回特殊值`nil`；否则，返回键`key`的值。

如果键`key`的值并非字符串类型，那么返回一个错误，因为`GET`命令只能用于字符串值。

### GETSET

**GETSET key value**

将键 key 的值设为 value，并返回键 key 在被设置之前的旧值。

**返回值**

返回给定键`key`的旧值。

如果键`key`没有旧值，也就是说，键`key`在被设置之前并不存在，那么命令返回`nil`。

当键`key`存在但不是字符串类型时，命令返回一个错误。

### STRLEN

**STRLEN key**

返回键`key`储存的字符串值的长度。

**返回值**

`STRLEN`命令返回字符串值的长度。

当键`key`不存在时，命令返回`0`。

当`key`储存的不是字符串值时，返回一个错误。

### APPEND

**APPEND key value**

如果键`key`已经存在并且它的值是一个字符串，`APPEND`命令将把`value`追加到键 key 现有值的末尾。

如果`key`不存在，`APPEND`就简单地将键`key`的值设为`value`，就像执行`SET key value` 一样。

**返回值**

追加`value`之后，键`key`的值的长度。

### SETRANGE

**SETRANGE key offset value**

从偏移量`offset`开始，用`value`参数覆写（overwrite）键`key`储存的字符串值。

不存在的键`key`当作空白字符串处理。

`SETRANGE`命令会确保字符串足够长以便将`value`设置到指定的偏移量上，如果键`key`原来储存的字符串长度比偏移量小（比如字符串只有 5 个字符长，但你设置的`offset`是`10`），那么原字符和偏移量之间的空白将用零字节（zerobytes，`“\x00”`）进行填充。

因为 Redis 字符串的大小被限制在 512 兆以内，所以用户能够使用的最大偏移量为 2^29-1(536870911),如果你需要使用比这更大的空间，请使用多个`key`。

> 当生成一个很长的字符串时，Redis 需要分配内存空间，该操作有时候可能会造成服务器阻塞（block）。在 2010 年出产的 Macbook Pro 上，设置偏移量为 536870911（512MB 内存分配）将耗费约 300 毫秒，设置偏移量为 134217728（128MB 内存分配）将耗费 80 毫秒，设置偏移量 33554432（32MB 内存分配）将耗费约 30 毫秒，设置偏移量为 8388608（8MB 内存分配）将耗费约 8 毫秒。

**返回值**

SETRANGE 命令会返回被修改之后，字符串值的长度。

### GETRANGE

**GETRANGE key start end**

返回键`key`储存的字符串值的指定部分，字符串的截取范围由`start`和`end`两个偏移量决定（包括`start`和`end`在内）。

负数偏移量表示从字符串的末尾开始计数，`-1`表示最后一个字符，`-2`表示倒数第二个字符，以此类推。

`GETRANGE`通过保证子字符串的值域（range）不超过实际字符串的值域来处理超出范围的值域请求。

> `GETRANGE`命令在 Redis2.0 之前的版本里面被称为`SUBSTR`命令。

**返回值**

`GETRANGE`命令会返回字符串值的指定部分。

### INCR

**INCR key**

为键`key`储存的数字值加上一。

如果键`key`不存在，那么它的值会先被初始化为 0，然后再执行`INCR`命令。

如果键`key`储存的值不能被解释为数字，那么`INCR`命令将返回一个错误。

本操作的值限制在 64 位（bit）有符号数字表示之内。

> `INCR`命令是一个针对字符串的操作。因为 Redis 并没有专用的整数类型，所以键`key`储存的值在执行`INCR`命令时会被解释为十进制 64 位有符号整数。

**返回值**

`INCR`命令会返回键`key`在执行加一操作之后的值。

### INCRBY

**INCRBY key increment**

为键`key`储存的数字值加上增量`increment`。

如果键`key`不存在，那么键`key`的值会被先初始化为`0`，然后再执行`INCRBY`命令。

如果键`key`储存的值不能被解释为数字，那么`INCRBY`命令将返回一个错误。

本操作的值限制在 64 位（bit）有符号数字表示之内。

**返回值**

在加上增量`increment`之后，键`key`当前的值。

### INCRBYFLOAT

**INCRBYFLOAT key increment**

为键`key`储存的值加上浮点数增量`increment`。

如果键`key`不存在，那么`INCRBYFLOAT`会先将键 key 的值设为 0，然后再执行加法操作。

如果命令执行成功，那么键`key`的值会被更新为执行加法计算之后的新值，并且新值会以字符串的形式返回给调用者。

无论是键`key`的值还是增量`increment`，都可以使用像`2.0e7`、`3e5`、`90e-2`那样的指数符号来表示，但是，执行`INCRBYFLOAT`命令之后的值总是以同样的形式储存，也就是，它们总是由一个数字，一个（可选的）小数点和一个任意的小数部分组成（比如`3.14`、`69.768`，诸如此类），小数部分尾随的`0`会被移除，如果可能的话，命令还会将浮点数转换为整数（比如`3.0`会被保存为`3`）。

此外，无论加法计算所得的浮点数的实际精度有多长，`INCRBYFLOAT`命令的计算结果最多只保留小数点的后 17 位。

当以下任意一个条件发生时，命令会返回一个错误：

- 键`key`的值不是字符串类型（因为 Redis 中的数字和浮点数都以字符串的形式保存，所以它们都属于字符串类型）；
- 键`key`当前的值或者给定的增量`increment`不能被解释为双精度浮点数。

**返回值**

在加上增量`increment`之后，键`key`的值。

### DECR

**DECR key**

为键 `key` 储存的数字值减去一。

如果键 `key` 不存在， 那么键 `key` 的值会先被初始化为 `0` ， 然后再执行 `DECR` 操作。

如果键 `key` 储存的值不能被解释为数字， 那么 `DECR` 命令将返回一个错误。

本操作的值限制在 64 位(bit)有符号数字表示之内。

**返回值**

`DECR` 命令会返回键 `key` 在执行减一操作之后的值。

### DECRBY

**DECRBY key decrement**

将键 `key` 储存的整数值减去减量 `decrement` 。

如果键 `key` 不存在， 那么键 `key` 的值会先被初始化为 `0` ， 然后再执行 `DECRBY` 命令。

如果键 `key` 储存的值不能被解释为数字， 那么 `DECRBY` 命令将返回一个错误。

本操作的值限制在 64 位(bit)有符号数字表示之内。

**返回值**

`DECRBY` 命令会返回键在执行减法操作之后的值。

### MSET

**MSET key value[key value ...]**

同时为多个键设置值。

如果某个给定键已经存在，那么`MSET`将使用新值去覆盖旧值，如果这不是你所希望的效果，请考虑使用`MSETNX`命令，这个命令只会在所有给定键都不存在的情况下进行设置。

`MSET`是一个原子性（atomic）操作，所有给定键都会在同一时间内被设置，不会出现某些键被设置了，但是另一些键没有被设置的情况。

**返回值**

`MSET`命令总是返回`OK`。

### MSETNX

**MSETNX key value [key value ...]**

当且仅当所有给定键都不存在时，为所有给定键设置值。

即使只有一个给定键已经存在，MSETNX 命令也会拒绝执行对所有键的设置操作。

`MSETNX`是一个原子性（atomic）操作，所有给定键要么就全部设置，要么就全部都不设置，不可能出现第三种状态。

**返回值**

当所有给定键都设置成功时，命令返回`1`；如果因为某个给定键已经存在而导致设置未能成功执行，那么命令返回`0`。

### MGET

**MGET key [key...]**

返回给定的一个或多个字符串键的值。

如果给定的字符串键里面，有某个键不存在，那么这个键的值将以特殊值`nil`表示。

**返回值**

`MGET`命令将返回一个列表，列表中包含了所有给定键的值。

## 哈希表

## 列表

### LPUSH

**LPUSH key value [value ...]**

将一个值或多个值 value 插入到列表 key 的表头

如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表头：比如说，对空列表 mylist 执行命令 LPUSH mylist a b c，列表的值将是 c b a,这等同于原子性地执行 LPUSH mylist a、LPUSH mylist b 和 LPUSH mylist c 三个命令。

如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作。

当 key 存在但不是列表类型时，返回一个错误。

> 在 Redis2.4 版本以前地 LPUSH 命令，都只接受单个 value 值。

**返回值**

执行 LPUSH 命令后，列表的长度。

### LPUSHX

**LPUSHX key value**

将值`value`插入到列表`key`的表头，当且仅当`key`存在并且是一个列表。

和`LPUSH key value [value...]`命令相反，当`key`不存在时，LPUSHX 命令什么也不做。

**返回值**

`LPUSHX`命令执行之后，表的长度。

### RPUSH

**RPUSH key value[value...]**

将一个或多个值`value`插入到列表`key`的表尾（最右边）。

如果有多个`value`值，那么各个`value`值按从左到右的顺序依次插入到表尾：比如对一个空列表`mylist`执行`RPUSH mylist a b c`，得出的结果列表为`a b c`，等同于执行命令`RPUSH mylist a`、`RPUSH mylist b`、`RPUSH mylist c`。

如果`key`不存在，一个空列表会被创建并执行`RPUSH`操作。

当`key`存在但不是列表类型时，返回一个错误。

> 在 Redis2.4 版本以前的`RPUSH`命令，都只接受单个`value`值。

**返回值**

执行 RPUSH 操作后，表的长度。

### RPUSHX

**RPUSHX key value**

将值 value 插入到列表 key 的表尾，当且仅当 key 存在并且是一个列表。

和 RPUSH key value [value...]命令相反，当 key 不存在时，RPUSHX 命令什么也不做。

**返回值**

RPUSHX 命令执行之后，表的长度。

### LPOP

**LPOP key**

移除并返回列表`key`的头元素。

**返回值**

列表的头元素。当`key`不存在时，返回`nil`。

### RPOP

**RPOP key**

移除并返回列表`key`的尾元素。

**返回值**

列表的尾元素。当`key`不存在时，返回`nil`。

### RPOPLPUSH

**RPOPLPUSH source destination**

命令 RPOPLPUSH 在一个原子时间内，执行以下两个动作：

- 将列表`source`中的最后一个元素（尾元素）弹出，并返回给客户端。
- 将`source`弹出的元素插入到列表`destination`，作为`destination`列表的头元素。

如果`source`不存在，值`nil`被返回，并且不执行其它动作。

如果`source`和`destination`相同，则列表中的表尾元素被移动到表头，并返回该元素，可以把这种特殊情况视作列表的旋转（rotation）操作。

**返回值**

被弹出的元素。

### LREM

**LREM key count value**

根据参数`count`的值，移除列表中与参数`value`相等的元素。

`count`的值可以是以下几种：

- count>0：从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count。
- count<0：从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。
- count=0：移除表中所有与 value 相等的值。

**返回值**

被移除元素的数量。因为不存在的 key 被视作空表（empty list ）,所以当 key 不存在时，LREM 命令总是返回 0。

### LLEN

**LLEN key**

返回列表`key`的长度。

如果`key`不存在，则`key`被解释为一个空列表，返回`0`。

如果`key`不是列表类型，返回一个错误。

**返回值**

列表 key 的长度。

### LINDEX

**LINDEX key index**

返回列表`key`中，下标为`index`的元素。

下标（index）参数`start`和`stop`都以`0`为底，也就是说，以`0`表示列表的第一个元素，以`1`表示列表的第二个元素，以此类推。

你也可以使用负数下标，以`-1`表示列表的最后一个元素，`-2`表示列表的倒数第二个元素，以此类推。

如果`key`不是列表类型，返回一个错误。

**返回值**

列表中下标为`index`的元素。如果`index`参数的值不在列表的区间范围内（out of range），返回`nil`。

### LINSERT

**LINSERT key BEFORE|AFTER pivot value**

将值 value 插入到列表 key 当中，位于值 pivot 之前或之后。

当 pivot 不存在于列表 key 时，不执行任何操作。

当 key 不存在时，key 被视为空列表，不执行任何操作。

如果 key 不是列表类型，返回一个错误。

**返回值**

如果命令执行成功，返回插入操作完成之后，列表的长度。如果没有找到 pivot，返回-1。如果 key 不存在或为空列表返回 0。

### LSET

**LSET key index value**

将列表`key`下标为`index`的元素的值设置为`value`。

当`index`参数超出范围，或对一个空列表（`key`不存在）进行`LSET`时，返回一个错误。

**返回值**

操作成功返回 ok，否则返回错误信息。

### LRANGE

**LRANGE key start stop**

返回列表 key 中指定区间内的元素，区间以偏移量 start 和 stop 指定。

下标（index）参数 start 和 stop 都以 0 为底，也就是说，以 0 表示列表的第一个元素，以 1 表示列表的第二个元素，以此类推。

你也可以使用负数下标，以-1 表示列表的最后一个元素，-2 表示列表的倒数第二个元素，以此类推。

**注意 LRANGE 命令和编程语言区间函数的区别**

加入你有一个包含一百个元素的列表，对该列表执行 LRANGE list 0 10,结果时一个包含 11 个元素的列表，这表明 stop 下标也在 LRANGE 命令的取值范围之内（闭区间），这和某些语言的区间函数可能不一致，比如 Ruby 的 Range.new、Array#slice 和 Python 的 range（）函数。

**超出范围的下标**

超出范围的下标值不会引起错误。

如果 start 下标比列表的最大下标 end（LLEN list 减去 1）还要大，那么 LRANGE 返回一个空列表。

如果 stop 下标比 end 下标还要大，Redis 将 stop 的值设置为 end。

**返回值**

一个列表，包含指定区间内的元素。

### LTRIM

**LTRIM key start stop**

对一个列表进行修剪（trim），就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。

举个例子，执行命令 LTRIM 0 2，表示只保留列表 list 的前三个元素，其余元素全部删除。

下标（inde）参数 start 和 stop 都以 0 为底，也就是说，以 0 表示列表的第一个元素，以 1 表示列表的第二个元素，以此类推。

你也可以使用负数下标，以-1 表示列表的最后一个元素，-2 表示列表的倒数第二个元素，以此类推。

当 key 不是列表类型时，返回一个错误。

LTRIM 命令通常和 LPUSH key value[value...]命令或 RPUSH key value[value...]命令配合使用，举个例子：

```
LPUSH log newst_log
LTRIM log 0 99
```

这个例子模拟了一个日志程序，每次将最新日志 newst_log 放到 log 列表中，并且只保留最新的 100 项。注意当这样使用 LTRIM 命令时，时间复杂度是 O（1），因为平均情况下，每次只有一个元素被移除。

**注意 LTRIM 命令和变成语言区间函数的区别**

假如你有一个包含一百个元素的列表 list，对该列表执行 LTRIM list 0 10，结果是一个包含 11 个元素的列表，这表明 stop 下标也在 LTRIM 命令的取值范围之内（闭区间），这和某些语言的区间函数可能不一致，比如 Ruby 的 Range.new、Array#slice 和 Python 的 range（）函数。

**超出范围的下标**

超出范围的下标值不会引起错误。

如果 `start` 下标比列表的最大下标 `end` ( `LLEN list` 减去 `1` )还要大，或者 `start > stop` ， [LTRIM](http://redisdoc.com/list/ltrim.html#ltrim) 返回一个空列表(因为 [LTRIM](http://redisdoc.com/list/ltrim.html#ltrim) 已经将整个列表清空)。

如果 `stop` 下标比 `end` 下标还要大，Redis 将 `stop` 的值设置为 `end` 。

**返回值**

命令执行成功时，返回 ok。

### BLPOP

**BLPOP key [key...] timeout**

BLPOP 是列表的阻塞式（blocking）弹出原语。

它是 LPOP key 命令的阻塞版本，当给定列表内没有任何元素可供弹出的时候，连接将被 BLPOP 命令阻塞，直到等待超时或发现可弹出元素为止。

当给定多个 key 参数时，按参数 key 的先后顺序依次检查各个列表，弹出第一个非空列表的头元素。

**非阻塞行为**

当 BLPOP 被调用时，如果给定 key 内至少有一个非空列表，那么弹出遇到的第一个非空列表的头元素，并和被弹出元素所属的列表的名字一起，组成结果返回给调用者。

当存在多个给定 key 时，BLPOP 按给定 key 参数排列的先后顺序，依次检查各个列表。

假设现在有 job、command 和 request 三个列表，其中 job 不存在，command 和 request 都持有非空列表。考虑以下命令：

BLPOP job command request 0

BLPOP 保证返回的元素来自 command，因为它是按“查找 job->查找 command->查找 request”这样的顺序，第一个找到的非空列表。

**阻塞行为**

如果所有给定 key 都不存在或包含空列表，那么 BLPOP 命令将阻塞连接，直到等待超时，或有另一个客户端对给定 key 的任意一个执行 LPUSH key value [value...]或 RPUSH key value[value...]命令为止。

超时参数 timeout 接受一个以秒为单位的数字作为值。超时参数设为 0 表示阻塞时间可以无期限延长（block indefinitely）。

**相同的 key 被多个客户端同时阻塞**

相同的 key 可以被多个客户端同时阻塞。

不同的客户端被放进一个队列中，按【先阻塞先服务】（first-BLPOP,first-served）的顺序为 key 执行 BLPOP 命令。

**在 MULTI/EXEC 事务中的 BLPOP**

BLPOP 可以用于流水线（pipline,批量地发送多个命令并读入多个回复），但把它用在 MULTI/EXEC 块当中没有意义。因为这要求整个服务器被阻塞以保证块执行时地原子性，该行为阻止了其他客户端执行 LPUSH key value [value...]或 RPUSH key value [value...]命令。

因此，一个被包裹在 MULTI/EXEC 块内地 BLPOP 命令，行为表现得就像 LPOP key 一样，对空列表返回 nil，对非空列表弹出列表元素，不进行任何阻塞操作。

**返回值**

如果列表为空，返回一个 nil。否则，返回一个含有两个元素地列表，第一个元素是被弹出元素所属地 key，第二个元素是被弹出元素的值。

**模式：事件提醒**

有时候，为了等待一个新元素到达数据中，需要使用轮询的方式对数据进行探查。

另一种更好的方式是，使用系统提供的阻塞原语，在新元素到达时立即进行处理，而新元素还没到达时，就一直阻塞住，避免轮询占用资源。

对于 Redis，我们似乎需要一个阻塞版的 SPOP key 命令，但实际上，使用 BLPOP 或者 BRPOP key [key...] timeout 就能很好地解决这个问题。

使用元素的客户端（消费者）可以执行类似以下地代码：

```
LOOP forever
	WHILE SPOP(key) returns elements
			... process elements ...
	END
	BRPOP helper_key
END
```

添加元素地客户端（生产者）则执行以下代码：

```
MULTI
	SADD key element
	LPUSH helper_key x
EXEC
```

### BRPOP

**BRPOP key [key...] timeout**

BRPOP 是列表的阻塞式（blocking）弹出原语。

它是 RPOP key 命令的阻塞版本，当给定列表内没有任何元素可供弹出的时候，连接将被 BRPOP 命令阻塞，直到等待超时或发现可弹出元素为止。

当给定多个 key 参数时，按参数 key 的先后顺序依次检查各个列表，弹出第一个非空列表的尾部元素。

**返回值**

假如在指定时间内没有任何元素被弹出，则返回以恶个 nil 和等待时长。反之，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key，第二个元素是被弹出元素的值。

### BRPOPLPUSH

**BRPOPLPUSH source destination timeout**

BRPOPLPUSH 是 RPOPLPUSH source destination 的阻塞版本，当给定列表 source 不为空时，BRPOPLPUSH 的表现和 RPOPLPUSH source destination 一样。

当列表 source 为空时，BRPOPLPUSH 命令将阻塞连接，直到等待超时，或有另一个客户端对 source 执行 LPUSH key value [value...] 或 RPUSH key value [value...]命令为止。

超时参数 timeout 接受一个以秒为单位的数字作为值。超时参数设为 0 表示阻塞时间可以无限期延长（block indefinitely）。

**返回值**

假如在指定时间内没有任何元素被弹出，则返回一个 nil 和等待时长，反之，返回一个含有两个元素的列表，第一个元素是被弹出元素的值，第二个元素是等待时长

**模式：安全队列**

**模式：循环列表**

## 集合

### SADD

**SADD key member[member...]**

将一个或多个 member 元素加入到集合 key 当中，已经存在于集合地 member 元素将被忽略。

假如 key 不存在，则创建一个只包含 member 元素作成员地集合。

当 key 不是集合类型时，返回一个错误。

> 在 Redis2.4 版本以前，SADD 只接受当个 member 值

**返回值**

被添加到集合中地新元素地数量，不包含被忽略地元素。

### SISMEMBER

**SISMEMBER key member**

判断 member 元素是否是集合 key 的成员。

**返回值**

如果 member 元素是集合地成员，返回 1.如果 member 元素不是集合地成员，或 key 不存在，返回 0。

### SPOP

**SPOP key**

移除并返回集合中的一个随机元素。

如果只想获取一个随机元素，但不想该元素从集合中被移除的话，可以使用 SRANDMEMBER key[count]命令。

**返回值**

被移除的随机元素。当`key`不存在或`key`是空集时，返回`nil`。

### SRANDMEMBER

**SRANDMEMBER key [count]**

如果命令执行时，只提供了 key 参数，那么返回集合中的一个随机元素。

从 Redis2.6 版本开始，SRANDMEMBER 命令接受可选的`count`参数：

- 如果 count 为正数，且小于集合基数，那么命令返回一个包含 count 个元素的数组，数组中的元素各不相同。那么 count 大于等于集合基数，那么返回整个集合。
- 如果 count 为负数，那么命令返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值。

该操作和 SPOP key 相似，但 SPOP key 将随机元素从集合中移除并返回，而 SRANDMEMBER 则仅仅返回随机元素，而不对集合进行任何改动。

**返回值**

只提供 key 参数时，返回一个元素；如果集合为空，返回 nil。如果提供了 count 参数，那么返回一个数组；如果集合为空，返回空数组。

### SREM

**SREM key member [member...]**

移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。

当 key 不是集合类型，返回一个错误。

> 在 Redis2.4 版本以前，SREM 只接受单个 member 值。

**返回值**

被成功移除的元素的数量，不包括被忽略的元素。

### SMOVE

SMOVE source destination member

将 member 元素从 source 集合移动到 destination 集合。

SMOVE 是原子性操作。

如果 source 集合不存在或不包含指定的 member 元素，则 SMOVE 命令不执行任何操作，仅返回 0.否则，member 元素从 source 集合中被移除，并添加到 destination 集合中去。

当 destination 集合已经包含 member 元素时，SMOVE 命令只是简单地将 source 集合中地 member 元素删除。

当 source 或 destination 不是集合类型时，返回一个错误。

**返回值**

如果 member 元素被成功移除，返回 1.如果 member 元素不是 source 集合的成员，并且没有任何操作对 destination 集合执行，那么返回 0。

### SCARD

**SCARD key**

返回集合 key 的基数（集合中元素的数量）。

**返回值**

集合的基数。当 key 不存在时，返回 0。

### SMEMBERS

**SMEMBERS key**

返回集合 key 中的所有成员。

不存在的 key 被视为空集合。

**返回值**

集合中的所有成员。

### SSCAN【？】

**SSCAN key cursor [MATCH pattern][count count]**

### SINTER

**SINTER key [key...]**

返回一个集合的全部成员，该集合是所有给定集合的交集。

不存在的 key 被视为空集。

当给定集合当中有一个空集时，结果也为空集（根据集合运算定律）。

**返回值**

交集成员的列表。

### SINTERSTORE

**SINTERSTORE destination key[key...]**

这个命令类似于 SINTER key [key...]命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。

如果 destination 集合已经存在，则将其覆盖。

destination 可以是 key 本身。

**返回值**

结果集中地成员数量。

### SUNION

SUNION key [key...]

返回一个集合的全部成员，该集合是所有给定集合的并集。

不存在的 key 被视为空集。

**返回值**

并集成员的列表。

### SUNIONSTORE

**SUNIONSTORE destination key[key...]**

这个命令类似于 SUNION key [key...]命令，但它将结果保存到 destination 集合，而不是简单地返回结果集。

如果 destination 已经存在，则将其覆盖。

destination 可以是 key 本身。

**返回值**

结果集中地元素数量。

### SDIFF

**SDIFF key[key...]**

返回一个集合的全部成员，该集合是所有给定集合之间的差集。

不存在的 key 被视为空集。

**返回值**

一个包含差集成员的列表。

### SDIFFSTORE

**SDIFFSTORE destination key[key...]**

这个命令的作用和 SDIFF key[key...]类似，但它将结果保存到 destination 集合，而不是简单地返回结果集。

如果 destination 集合已经存在，则将其覆盖。

destination 可以是 key 本身。

**返回值**

结果集中地元素数量。

## 有序集合

### ZADD

### ZSCORE

### ZINCRBY

### ZCARD

### ZCOUNT

### ZRANGE

### ZREVRANGE

### ZRANGEBYSCORE

### ZREVRANGEBYSCORE

### ZRANK

### ZREVRANK

### ZREM

### ZREMRANGEBYRANK

### ZREMRANGEBYSCORE

### ZRANGEBYLEX

### ZLEXCOUNT

### ZREMRANGEBYLEX

### ZSCAN

### ZUNIONSTORE

### ZINTERSTORE

## 数据库

### EXISTS

**EXISTS key**

检查给定`key`是否存在。

**返回值**

若`key`存在，返回`1`，否则返回`0`。

### TYPE

**TYPE key**

返回`key`所储存的值的类型。

**返回值**

- `none`（key 不存在）
- `string`（字符串）
- `list`（列表）
- `set`（集合）
- `zset`（有序集）
- `hash`（哈希表）
- `stream`（流）

### RENAME

**RENAME key newkey**

将`key`改名为`newkey`。

当`key`和`newkey`相同，或者`key`不存在时，返回一个错误。

当`newkey`已经存在时，`RENAME`命令将覆盖旧值。

**返回值**

改名成功时提示`OK`，失败时候返回一个错误。

### RENAMENX

**RENAMENX key newkey **

当且仅当`newkey`不存在时，将`key`改名为`newkey`。

当不存在时，返回一个错误。

**返回值**

修改成功时，返回`1`；如果`newkey`已经存在，返回`0`。

### MOVE

**Move key db**

将当前数据库的`key`移动到给定的数据库 db 当中。

如果当前数据库（源数据库）和给定数据库（目标数据库）有相同名字的给定`key`，或者`key`不存在于当前数据库，那么`MOVE`没有任何效果。

因此，也可以利用这一特性，将`MOVE`当作锁（locking）原语(primitive)。

**返回值**

移动成功返回`1`，失败则返回`0`。

### DEL

**DEL key [key...]**

删除给定的一个或多个`key`。

不存在的`key`会被忽略。

**返回值**

被删除`key`的数量。

### RANDOMKEY

从当前数据库中随机返回（不删除）一个`key`。

**返回值**

当数据库不为空时，返回一个`key`。当数据库为空时，返回`nil`。

### DBSIZE

返回数据库的`key`的数量。

**返回值**

当前数据库的`key`的数量。

### KEYS

KEYS pattern

查找所有复符合给定模式 pattern 的 key,比如说：

- KEYS \* 匹配数据库中的所有 key。
- KEYS h?llo 匹配 hello,hallo 和 hxllo 等。
- KEYS h\*llo 匹配 hllo 和 heeeeello 等。
- KEYS h[ae]llo 匹配 hello 和 hallo，但不匹配 hillo。

特俗符号用\隔开。

> KEYS 的速度非常快，但在一个大的数据库中使用它仍然可能造成性能问题，如果你需要从一个数据集中查找特定的 key，你最好还是用 Redis 的集合结构（set）来代替。

**返回值**

符合给定模式的`key`列表。

### SCAN【？】

### SORT【？】

### FLUSHDB

清空当前数据库中的所有 key。

此命令从不失败。

**返回值**

总是返回`OK`。

### FLUSHALL

清空整个 Redis 服务器的数据（删除所有数据库中的所有 key）。

此命令从不失败。

**返回值**

总是返回`OK`。

### SELECT

**SELECT index**

切换到指定的数据库，数据库索引号`index`用数字值指定，以`0`作为起始索引值。

默认使用`0`号数据库。

**返回值**

`OK`。

### SWAPDB

SWAPDB db1 db2

> 版本要求：>=4.0.0

对换指定的两个数据库，使得两个数据库的数据立即互换。

**返回值**

`OK`。

## 调试

### PING

使用客户端向 Redis 服务器发送一个 PING，如果服务器运作正常的话，会返回一个 PONG。

通常用于测试与服务器的连接是否仍然生效，或者用于测量延迟值。

返回值

如果连接正常就返回一个 PONG，否则返回一个连接错误。

### ECHO

**ECHO message**

打印一个特定的信息`message`，测试时使用。

**返回值**

`message`自身。

### OBJECT【？】

### SLOWLOG【？】

### MONITOR

实时打印出 Redis 服务器接收到的命令，调试用。

**返回值**

总是返回`OK`。

### DEBUG【？】

### DEBUG SEGFAULT

执行一个不合法的内存访问从而让 Redis 崩溃，仅在开发时用于 BUG 模拟。

**返回值**

无

class Snowflake {
    constructor(workerId, datacenterId, sequence) {
        this.workerId = workerId;
        this.datacenterId = datacenterId;
        this.sequence = sequence || 0;

        // 检查参数是否合法
        if (this.workerId >= (1 << 5)) throw new Error('worker Id cannot exceed 31');
        if (this.datacenterId >= (1 << 5)) throw new Error('datacenter Id cannot exceed 31');

        // 时间戳起始点
        this.twepoch = 1288834974657; // 可以设置为某个基准时间，例如这里设置为某个过去的日期
        this.sequenceBit = 12; // 序列号占用位数
        this.workerIdBit = 5; // 工作机器ID占用位数
        this.datacenterIdBit = 5; // 数据中心ID占用位数
        this.maxWorkerId = -1 ^ (-1 << this.workerIdBit); // 最大工作机器ID
        this.maxDatacenterId = -1 ^ (-1 << this.datacenterIdBit); // 最大数据中心ID
        this.sequenceMask = -1 ^ (-1 << this.sequenceBit); // 序列号掩码

        // 时间戳向左移动来拼接生成最终的ID
        this.workerIdShift = this.sequenceBit;
        this.datacenterIdShift = this.sequenceBit + this.workerIdBit;
        this.timestampLeftShift = this.sequenceBit + this.workerIdBit + this.datacenterIdBit;
    }

    nextId() {
        let timestamp = this.timeGen();

        if (timestamp < this.lastTimestamp) {
            throw new Error(`Clock moved backwards. Refusing to generate id for ${this.lastTimestamp - timestamp} milliseconds`);
        }

        if (this.lastTimestamp === timestamp) {
            this.sequence = (this.sequence + 1) & this.sequenceMask;
            if (this.sequence === 0) {
                timestamp = this.tilNextMillis(this.lastTimestamp);
            }
        } else {
            this.sequence = 0;
        }

        this.lastTimestamp = timestamp;

        return ((timestamp - this.twepoch) << this.timestampLeftShift) |
            (this.datacenterId << this.datacenterIdShift) |
            (this.workerId << this.workerIdShift) |
            this.sequence;
    }

    tilNextMillis(lastTimestamp) {
        let timestamp = this.timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = this.timeGen();
        }
        return timestamp;
    }

    timeGen() {
        return Date.now();
    }
}

// 使用示例：
const snowflake = new Snowflake(1 /* workerId */, 1 /* datacenterId */);

export const randomId = () => snowflake.nextId();
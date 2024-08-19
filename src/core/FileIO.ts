import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

// 将 fs 方法转换为 Promise 版本
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const appendFileAsync = promisify(fs.appendFile);
const unlinkAsync = promisify(fs.unlink);
const accessAsync = promisify(fs.access);

export class FileIO {
    // 私有字段
    private filePath: string;
    // 构建器
    constructor(filePath: string) {
        // 确保传入的路径是绝对路径
        this.filePath = path.resolve(filePath);
    }
    // 读取文件内容
    public async readFile(encoding: BufferEncoding = "utf8"): Promise<string> {
        try {
            const data = await readFileAsync(this.filePath, encoding);
            return data.toString();
        } catch (err: any) {
            throw new Error(`Failed to read file: ${err.message}`);
        }
    }
    // 写入文件（会覆盖文件内容）
    public async writeFile(
        data: string,
        encoding: BufferEncoding = "utf8"
    ): Promise<void> {
        try {
            await writeFileAsync(this.filePath, data, encoding);
        } catch (err: any) {
            throw new Error(`Failed to write file: ${err.message}`);
        }
    }
    // 追加内容到文件
    public async appendFile(
        data: string,
        encoding: BufferEncoding = "utf8"
    ): Promise<void> {
        try {
            await appendFileAsync(this.filePath, data, encoding);
        } catch (err: any) {
            throw new Error(`Failed to append to file: ${err.message}`);
        }
    }
    // 删除文件
    public async deleteFile(): Promise<void> {
        try {
            await unlinkAsync(this.filePath);
        } catch (err: any) {
            throw new Error(`Failed to delete file: ${err.message}`);
        }
    }
    // 检查文件是否存在
    public async fileExists(): Promise<boolean> {
        try {
            await accessAsync(this.filePath, fs.constants.F_OK);
            return true;
        } catch {
            return false;
        }
    }
}

const UploadPipeline = require("../src/uploadPipeline.js");
const ScannerService = require("../src/scannerService.js");

describe("File upload and virus scan pipeline", () => {
    test("should process valid input", () => {
        const obj = new UploadPipeline();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new UploadPipeline();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new UploadPipeline();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new ScannerService();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});

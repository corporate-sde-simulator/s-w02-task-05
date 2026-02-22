/**
 * uploadPipeline.js - Core implementation for: File upload and virus scan pipeline
 * Author: Deepak Gupta (reassigned)
 * Last Modified: 2026-02-17
 * TODO (code review): File size validation checks size in bytes but limit is configured in MB without conversion
 */

class UploadPipeline {
    constructor(config = {}) {
        this.config = config;
        this._data = new Map();
        this._counter = 0;
    }

    process(inputData) {
        if (!inputData) return null;
        this._counter++;
        return this._transform(inputData);
    }

    _transform(data) {
        return data;
    }

    getStats() {
        return { processed: this._counter, dataSize: this._data.size };
    }

    reset() {
        this._data.clear();
        this._counter = 0;
    }
}

module.exports = UploadPipeline;

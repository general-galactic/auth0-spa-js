function hasKeys(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && Object.keys(value).length > 0
}

export function valueSample(data: unknown, sampleLength = 50): string {
    if (hasKeys(data)) return objectSample(data, sampleLength)
    return stringSample(data, sampleLength)
}

function objectSample(object: Record<string, unknown>, sampleLength = 50) {
    const output: Record<string, string> = {}
    for (const key of Object.keys(object)) {
        output[key] = stringSample(object[key], sampleLength)
    }
    return JSON.stringify(output)
}

function stringSample(data: unknown, sampleLength = 50): string {
    if (data === undefined) return 'undefined'
    if (data === null) return 'null'
    const dataString = JSON.stringify(data)
    if (!dataString) return 'no-string-data'
    return dataString.slice(0, sampleLength) + '...'
}

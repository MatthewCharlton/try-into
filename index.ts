export { };

type Result<T> = [error: unknown | undefined, value: T | undefined];

function tryInto<T = unknown>(fn: Function): Result<T> {
    let res, err;

    try {
        res = fn();
    } catch (e) {
        err = e
    }

    return [err, res]
}

async function tryIntoAsync<T = unknown>(fn: () => Promise<T>): Promise<Result<T>>  {
    let res, err;

    try {
        res = await fn()
    } catch (e) {
        err = e
    }

    return [err, res]
}

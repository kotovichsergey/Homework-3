function bind (fn, ctx) {
    return function bound () {
        return fn.apply(ctx, arguments);
    };
}
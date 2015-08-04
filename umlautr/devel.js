define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-testapp/TestApp-Tests',
    'amber-attic/Benchfib',
    'amber-attic/Examples',
    'amber-attic/IDE'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});

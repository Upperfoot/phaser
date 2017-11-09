var Overlap = function (object1, object2, overlapCallback, processCallback, callbackContext)
{
    if (overlapCallback === undefined) { overlapCallback = null; }
    if (processCallback === undefined) { processCallback = null; }
    if (callbackContext === undefined) { callbackContext = overlapCallback; }

    this._total = 0;

    this.collideObjects(object1, object2, overlapCallback, processCallback, callbackContext, true);

    return (this._total > 0);
};

module.exports = Overlap;

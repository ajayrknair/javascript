
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return Math.max(x,y) - Math.min(x,y);
}

function getTaskPercentComplete(activityList) {
    if (!activityList || activityList.length === 0) {
        return 0;
    }
    var taskTotalHours = 0.0;
    var taskCompletedHours = 0.0;

    // Loop through activity list to calculate percent complete
    for (var i = 0; i < activityList.length; i++) {
        if (!activityList[i].notApplicable) {
            var remainingHours = activityList[i].remainingHours,
                totalHours = activityList[i].adjustedHours || activityList[i].estimatedHours || 0.0;

            if (isNaN(remainingHours)) {
                remainingHours = activityList[i].estimatedHours || 0.0;
            } else {
                remainingHours = Number(remainingHours);
            }

            taskCompletedHours += (totalHours - remainingHours);
            taskTotalHours += totalHours;
        }
    }
    return Math.round(taskCompletedHours / taskTotalHours * 100);
}

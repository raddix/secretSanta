var fs = require('fs');

var availableCandidate;

var getPartnerName = (name) =>    {

    var data = fs.readFileSync('candidate.json');
    if(data!='') {
        var fileData = JSON.parse(data);
        availableCandidate = fileData.available;
    }
    else {
        availableCandidate = ['Mark John','Mahesh Purohit','Pintu Saxena','Akhil Jindal',
                            'Sassy Queen','Makensy Queen','Ashok Prakash','Bultu Pandey','Sidhu Saxena'];
    }

    var result = '';
    const index = Math.floor(Math.random() * availableCandidate.length);
    const candidate = availableCandidate[index];

    //Removing the element from the list
    availableCandidate.splice(index,1);

    var currentData = {avalable : availableCandidate};
    var writingData = JSON.stringify(currentData,null,2);
    fs.writeFile('candidate.json',writingData,finished);

    function finished(err){
        if(err) {
            console.log(err);
        }
    }

	return candidate;
};

module.exports = {
    getPartnerName
};
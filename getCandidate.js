

var availableCandidate = ['Mark John','Mahesh Purohit','Pintu Saxena','Akhil Jindal',
                            'Sassy Queen','Makensy Queen','Ashok Prakash','Bultu Pandey','Sidhu Saxena'];

var getPartnerName = (name) =>    {

    var result = '';
    const index = Math.floor(Math.random() * availableCandidate.length);
    const candidate = availableCandidate[index];
	return candidate;
};

module.exports = {
    getPartnerName
};
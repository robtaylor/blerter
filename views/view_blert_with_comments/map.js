function(doc) {

	if(doc.type=='blert') {
		emit([doc._id, 0], [doc.user, doc.body]);
	}

	else if (doc.type=='comment') {
		emit([doc.blert, 1, doc.timestamp], [doc.user, doc.body]);
	}

}


function(doc) {
	if(doc.type=="user"){
		emit([doc._id, 0], doc._id);
	}
	else if(doc.type=="comment"){
		emit([doc.user, 1, doc.timestamp], [doc.user, doc.blert, doc.body, doc.timestamp]);
	}
}

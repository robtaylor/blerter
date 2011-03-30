function(doc) {
	if(doc.type=="blert")
		emit([doc._id, doc.timestamp], [doc.body, doc.user]);  
}

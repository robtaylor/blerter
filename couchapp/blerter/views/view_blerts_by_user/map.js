function(doc) {
  
	if(doc.type=='user') {
		emit([doc._id, 0], doc);
	}

	else if (doc.type=='blert') {
		emit([doc.user,1], doc.body, doc.tag);
		//emit([doc.username,1], {_id: doc.tag} );
	}

}

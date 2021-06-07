var TABLENAME = 'sys_update_set';
var updateSetCount = checkExistingUpdateSet();
var ID;

function checkExistingUpdateSet(){
	return new GlideQuery(TABLENAME)
		.where('u_story', current.sys_id)
		.count();
}

createUpdateSet(updateSetCount);

function createUpdateSet(c){
	ID =	new GlideQuery(TABLENAME)
		.insert({
		name : current.number+'_'+current.short_description+'_'+current.assigned_to.user_name+'_'+(c+1),
		state : 'in progress',
		u_story : current.sys_id
	})
		.get();

	new GlideUpdateSet().set(ID.sys_id);
}


action.setRedirectURL(current);

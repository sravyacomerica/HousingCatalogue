 
 
 function addeduDetails()
 
 {	
	 var toGetMailId,email,eduDetails,j,myJSON,obj,obj1,arrayToStoreData = [],key,i =0,lengthOfTheRows,temp = 0,ln;
	 email = localStorage.getItem("email") ;
	 toGetMailId = JSON.parse(email);
	 toGetMailId = toGetMailId.email;
	 console.log(toGetMailId);
	 
	 for(j=0;j<4;j++)
	 {
		// eduDetails = document.getElementById("d+"+j);
		 arrayToStoreData[j] = $('#d'+j).val();//eduDetails.value;
	 }
	
	
		lengthOfTheRows = localStorage.getItem('ln'+toGetMailId);
		length1 = JSON.parse(lengthOfTheRows);
		length1 = length1.ln;	 
		length1 = parseInt(length1);
		
		console.log('length1 1'+ length1);
		console.log('length1 type '+typeof length1);
	
	
	
	
	
	var table = document.getElementById("table");
    var row = table.insertRow(-1);
	row.id = 'b+b+'+length1;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
    cell1.innerHTML = arrayToStoreData[0];
    cell2.innerHTML = arrayToStoreData[1];
	cell3.innerHTML = arrayToStoreData[2];
	cell4.innerHTML = arrayToStoreData[3];   //id ="a+'+length1+'"    id = "b+'+length1+'" onclick="editEduDetails(this.id)"
	cell5.innerHTML =  '<center><button class="btn btn-success" data-toggle="collapse" data-target="#demo" id ="a+'+length1+'" onclick="attribSet(this.id)" > EDIT</button><button class="btn btn-danger "id ="b+'+length1+'" onclick= "deleteEduDetails(this.id)" > DELETE</button></center>'
		
	
	
	
	myJSON = {"school":arrayToStoreData[0],"degree":arrayToStoreData[1],"study":arrayToStoreData[2],"cdate":arrayToStoreData[3]};
	obj = JSON.stringify(myJSON);
	localStorage.setItem('a+'+length1+''+toGetMailId,obj);
	 
	++length1;
	ln = {'ln':length1};
	obj = JSON.stringify(ln);
	localStorage.setItem('ln'+toGetMailId,obj);	
	console.log('length1 after '+ length1); 
	

	   for(j=0;j<4;j++)
	 {
		 eduDetails = document.getElementById("d+"+j);
		 eduDetails.value ="";
		 
	 } 
	 
	 
	
 }
 

 
 
 
 
 function deleteEduDetails(idd)
 {
	var idArray =0,email,toGetMailId,deletedRowId;
	email = localStorage.getItem("email") ;
	toGetMailId = JSON.parse(email);
	toGetMailId = toGetMailId.email;
	idArray = idd.split("+");
	deletedRowId = idArray[1];
	
	$('#bb'+idArray[1]).remove();
	
	localStorage.removeItem('a+'+deletedRowId+''+toGetMailId);
	alert('Deleted The Selected  Row Successfully');
	
 }

 
 function editEduDetails(idd)
 {
	 var idArray,row,table,eduDetails,arrayToStoreData = [],myJSON,obj;
	idArray = idd.split('+');
	
	$('#bb'+idArray[1]).remove();
	
	 for(j=0;j<4;j++)
	 {
		 eduDetails = document.getElementById("d+"+j);
		 arrayToStoreData[j] = eduDetails.value;
	 }
	
	
	
	myJSON = {"school":arrayToStoreData[0],"degree":arrayToStoreData[1],"study":arrayToStoreData[2],"cdate":arrayToStoreData[3]};
	obj = JSON.stringify(myJSON);
	localStorage.setItem('a+'+idArray[1]+''+toGetMailId,obj);
	
	var table = document.getElementById("table");
    var row = table.insertRow(-1);
	row.id = 'b+b+'+idArray[1];
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
    cell1.innerHTML = arrayToStoreData[0];
    cell2.innerHTML = arrayToStoreData[1];
	cell3.innerHTML = arrayToStoreData[2];
	cell4.innerHTML = arrayToStoreData[3];   //id ="a+'+length1+'"    id = "b+'+length1+'" onclick="editEduDetails(this.id)"
	cell5.innerHTML =  '<center><button class="btn btn-success" data-toggle="collapse" data-target="#demo" id ="a+'+length1+'" onclick="attribSet(this.id)" > EDIT</button><button class="btn btn-danger "id ="b+'+length1+'" onclick= "deleteEduDetails(this.id)" > DELETE</button></center>'
				
				document.getElementById("toggle").innerHTML = "Input Data";
	
 }
 
 
 


 function userData()
 {
	 //To print user Deatials In web page . . .
	var email,obj,userDetails,obj1,obj2,eduDetails,key,i = 0,eduDetailsLength ,j = 0;
	
	
	email = localStorage.getItem("email") ;
	obj = JSON.parse(email);
	toGetMailId = obj.email;
	
	userDetails = localStorage.getItem('a'+toGetMailId);
	obj1 = JSON.parse(userDetails);
	//document.getElementById("printusername").innerHTML = 'Welcome '+ obj1.firstname +"    ";
	$('#printusername').html('Welcome '+ obj1.firstname +"    ")	
	
	for(key in obj1)
	{
		if(key == 'gender')
		{
				if(obj1[key]== 'male')
				{
					$('#male').prop('checked',true);
				}
				else
				{
					$('#female').prop('checked',true);
				}
				
		}
		else
		{
			$('#b'+i).val(obj1[key]);
			i++;
		}
		
	}
	 
	 
		lengthOfTheRows = localStorage.getItem('ln'+toGetMailId);
		length1 = JSON.parse(lengthOfTheRows);
		length1 = length1.ln;	 
		length1 = parseInt(length1);
		//console.log( length1 +' '+typeof length1 );
		
		for(i = 1; i <= length1; i++)
		{
			getEduDetaisls = localStorage.getItem('a+'+i+''+toGetMailId);
			if(getEduDetaisls)
			{
					eduDetails = JSON.parse(getEduDetaisls);
					var table = document.getElementById("table");
					var row = table.insertRow(-1);
					row.id = 'bb'+i;
					
				j = 0;
				for(key in eduDetails)
				{
					var cell1 =row.insertCell(j);
					cell1.innerHTML = eduDetails[key];
					j++;
					
					if(j == 4)
					{
						var cell1 = row.insertCell(j);//onclick="editEduDetails(this.id)"
						cell1.innerHTML = '<center><button class="btn btn-success" data-toggle="collapse" data-target="#demo" id ="a+'+i+'"  onclick="attribSet(this.id)"> EDIT</button><button class="btn btn-danger "id ="b+'+i+'" onclick= "deleteEduDetails(this.id)" > DELETE</button></center>'
			
					}
				}
			}
		}
	}
		
	
	

	
 
 function attribSet(idd)
 {
	 
	 var storeClass = document.getElementsByClassName("myclass");
	  storeClass[0].setAttribute("id",idd);
	  $('#hide').css('display','none')
	 $('#toggle').html('EDIT');
 }
 
 
 //Toggle Button..
 $(document).ready(function(){
	 $('#toggle').click(function(){
		 $('#hide').css('display','block');
		 $('.myclass').css('display','none');
	});
 });
 
 
 //UpDate Function .. . . 
 $(document).ready(function(){
	$('#update').click(function(){
	 var i = 0,a = [] ,obj,myJSON,email,gender,flag = 1;
	 var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	 var emailCh = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var nameCh = /^[A-Za-z]{3,20}$/;
	 var phoneNo = /^\d{6,10}$/;
	 var zipCh = /^\d{6}$/;
	 var dob =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	 for( i = 0; i <12;i++)
	 {
		 a[i] = $('#b'+i).val();		 
	 }
	 
	 if($('#male').is(':checked'))
	 {
		 gender = "male";
	 }
	 else if($('#female').is(':checked'))
	 {
		 gender = "female";
	 }
	 
	 for(i = 0 ; i<=10 ;i++){
	 if(i==4){i = 8;}
	 else if(nameCh.test(a[i])){
		 flag++;
		 console.log(flag);
	 }
	 else{
		 alert('Enter Valid Input');
	 }
	 }
						//PHONE NO. validitation 
									if(phoneNo.test(a[4]) && flag == 7){
										//DOB validitation
										if(dob.test(a[5])){
											// Zip validation 
											if(zipCh.test(a[11])){
													if(gender)
													{															
														if(a[6]&& a[6]!=" ")
														{
															if(a[7]&&a[7]!= " ")
															{
																	obj = { "firstname":a[0], "lastname":a[1],"middlename":a[2],"nickname":a[3],"mobile":a[4],"bday":a[5],"gender":gender,"address":a[6],"address1":a[7],"city":a[8],"country":a[9],"state":a[10],"zip":a[11]}; 
																	myJSON = JSON.stringify(obj);
																	email = localStorage.getItem("email");
																	obj1 = JSON.parse(email);
																	localStorage.setItem("a"+obj1.email,myJSON);
																	$('#printusername').html('Welcome '+'  '+ a[0])
																		 alert('Updated Successfully');
														    }
																 else
																{
																	alert("Please Enter Valid Address1")
																}
														}
														else
														{
															alert("Please Enter Valid Address")
														}											
													}
													else
													{
														alert("Please select Gender");
													}
													
												}
												else
												{
													alert("please enter valid ZIP");
												}								
											}
											else
											{
												alert(" Please Enter Valid DOB");
											}
						
										}
										else
										{
											alert("Please Ente valid Phone Number");
										} 
 });
 });
 
 
 
 
 function updatepassword()
 {
	var obj,email,emailId,pwd,cnfPwd,json,strgy;
	var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	  email = localStorage.getItem("email") ;
	  obj = JSON.parse(email);
	  emailId = $('#p1').val();
	  pwd = $('#p2').val();
	 cnfPwd = $('#p3').val();
	if(passwordCh.test(pwd))
	{
		if(obj.email == emailId)
		{
		 if (pwd == cnfPwd)
		 {
			json = {"email":emailId,"pwd":pwd,"cnfpwd":cnfPwd};
			strgy = JSON.stringify(json);
			localStorage.setItem(obj.email,strgy);
			alert("Password Changed Successfully");
		 }
		 else
		 {
			alert("Password Is Not matched ");
		 }
	}
	 else
	 {
		 alert("Please Enter Valid Email ID");
	 }
	}
	else
	{
		alert("Enter Valid Password");
	}
 }
 
 
 
 
 
  function logout()
 {
	localStorage.removeItem("email");	
	for(i=0;i<12;i++){
		$('#b'+i).val('');
	}	
		$('#male').prop('checked',false)
		$('#female').prop('checked',false)
		window.location = "logout.html";
		alert("Logged Out Successful");
}
 
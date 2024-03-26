// Get the hidden input field by its id
const timestampField = document.getElementById('timestamp');
// Get the current date/time in milliseconds
const currentTimestamp = Date.now();

// Set the value of the hidden input field to the current date/time
timestampField.value = currentTimestamp;

let position = document.querySelector("#position");
// Add an event listener to listen for input events
position.addEventListener("focusout", checkVaild);

function checkVaild(){
    // Get the field value
    const position_value = position.value.trim();
    // Define a regular expression pattern
    const position_pattern = /^[a-zA-Z0-9]{7,}$/;
    // Check if the value matches the pattern
    if (position_pattern.test(position_value)) {
        // If the value matches the pattern, it's valid
		position.style.backgroundColor = "#fff";
		position.style.color = "#000";
        console.log("vaild");
    } else {
        // If the value doesn't match the pattern, it's invalid
		position.style.backgroundColor = "#fff0f3";
		position.value = "";
		position.focus();
        console.log("❗Please revise.");
    }
};

const eMail = document.querySelector("#email");
eMail.addEventListener("focusout", checkEmail)

function checkEmail(){
	let eMail_value = eMail.value.trim();//trim() 方法用于删除字符串的开头和结尾处的空格
	const eMail_pattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
	if (eMail_pattern.test(eMail_value)){
		eMail.style.backgroundColor = "#fff";
		eMail.style.color = "#000";
	}
	else{
		eMail.style.backgroundColor = "#fff0f3";
		eMail.value= "";
        eMail.focus();
        console.log("❗Please revise.");
	}
};


// 获取输入字段元素
const phone = document.getElementById('phone');
// 监听输入事件
phone.addEventListener('input', function() {
    // 获取输入字段的值
    let phoneNumber = phone.value;

    // 使用正则表达式检查是否只包含数字
    if (!/^\d*$/.test(phoneNumber)) {
        // 如果输入的字符不是数字，则移除非数字字符
        phoneNumber = phoneNumber.replace(/\D/g, '');
        // 更新输入字段的值
        phone.value = phoneNumber;
    }
});
function myfunction() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var result = weight / (height * height);
  var res = result.toFixed(2);
  alert(
    "Given, \r\nWeight : " +
      weight +
      " kg\r\nHeight : " +
      height +
      " mtrs\r\nBMI value is " +
      res
  );
}

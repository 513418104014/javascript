
<!DOCTYPE html>
<html>
<body>

<p>Never create strings as objects.</p>
<p>Strings and objects cannot be safely compared.</p>

<p id="demo"></p>

<script>
var x = "John";        // x is a string
var y = new String("John");  // y is an object
document.getElementById("demo").innerHTML = x===y;
</script>

</body>
</html>

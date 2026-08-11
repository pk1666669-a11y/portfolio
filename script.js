<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Data Analysis Dashboard</title>
<style>
body { background: #000; color: #0f0; font-family: Arial; text-align: center; padding: 40px; }
.container { border: 2px solid #0f0; border-radius: 15px; padding: 30px; max-width: 600px; margin: auto; }
h1 { color: #0f0; }
button { background: #0f0; color: #000; border: none; padding: 12px 25px; font-size: 16px; border-radius: 8px; cursor: pointer; margin: 10px; font-weight: bold; }
button:hover { background: #0c0; }
#output { margin-top: 20px; background: #111; padding: 20px; border-radius: 10px; text-align: left; }
</style>
</head>
<body>
<div class="container">
<h1>📊 DATA ANALYSIS DASHBOARD</h1>
<p>Sample Sales Data Analysis</p>
<button onclick="runAnalysis()">Run Analysis</button>
<div id="output"></div>
</div>

<script>
function runAnalysis() {
    let data = [
        {month: "Jan", sales: 4000},
        {month: "Feb", sales: 5200},
        {month: "Mar", sales: 6100},
        {month: "Apr", sales: 4800},
        {month: "May", sales: 7500}
    ];
    
    let total = data.reduce((sum, item) => sum + item.sales, 0);
    let avg = (total / data.length).toFixed(2);
    let max = Math.max(...data.map(item => item.sales));
    
    document.getElementById("output").innerHTML = `
        <h3>Analysis Result:</h3>
        <p><b>Total Sales:</b> ₹${total}</p>
        <p><b>Average Sales:</b> ₹${avg}</p>
        <p><b>Best Month Sales:</b> ₹${max}</p>
        <p><b>Data Points:</b> ${data.length} months</p>
        <hr>
        <p>Note: This is simulated data. In real project I used Pandas + Matplotlib</p>
    `;
}
</script>
</body>
</html>
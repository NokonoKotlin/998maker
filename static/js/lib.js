const base = "9-98-2-4+43+53";
const base_double = base + "+" + base;

// S to (S)
function format(S){return "(" + S + ")";}

// N to 998244353;
function convert998(N){
    console.log(N);
    if((typeof N) != 'number')return "invalid";
    var toggle = false;

    if( N == 0 )return base + "-" + format(base);
    if(N < 0){
        toggle = true;
        N = N*(-1);
    }
    var power2 = format(base);
    var res = "";
    for(var bit = 0; bit < 30 ; bit++){
        if(N&(1<<bit)){
            if(res.length == 0)res = power2;
            else res = res + "+" + power2;
        }
        power2 = power2 + "*" + format(base_double);
    }
    if(toggle) res = "-" + format(res);
    return res;
}


function convert_and_display(){
    var inp = document.getElementById("mainform").value;
    var display_area = document.getElementById("display_area");
    display_area.innerText = inp + " = " + convert998(parseInt(inp));
}
console.log("Funciona el script");

//INIT FUNCTIONS
init2a();
init2b();
init16_18();
init35();
init10();
init42a();
init42b();
init48a();
init48b();
init48c();

//FUNCTIONS
function init2a() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1296035760&single=true&output=csv';
    d3.csv(url, function(data, error) {
        if (error) throw error;
        console.log(data);
    });
}

function init2b() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1296035760&single=true&output=csv';
    d3.csv(url, function(data, error) {
        if (error) throw error;
        
    });
}

function init16_18() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init35() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init10() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init42a() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init42b() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init48a() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init48b() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}

function init48c() {
    let url = '';
    d3.csv('', function(data, error) {
        if (error) throw error;
        
    });
}
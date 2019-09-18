let app = {};

app.SERVICE_UUID='0000ffe0-0000-1000-8000-00805f9b34fb';
app.CHARACTERISTIC_UUID='92387978923';

document.addEventListener(
    'deviceready',
    function () {
        app.initialize();
    });

app.initialize = function()
{
    console.log('Initialized');
    app.connected = false; 
    app.device = null;
}

app.connect = function()
{
    console.log('Attempting to connect to bluetooth module');

    evothings.easyble.startScan(scanSuccess,scanFailure, {serviceUUIDS : [app.SERVICE_UUID]}, { allowDuplicates: false});
}

function scanSuccess(device)
{
    if(device.name != null)
    {
        console.log('Found' + device.name);
        device.connect(connectSuccess,connectFailure);
        evothings.easyble.stopScan();
    }
}

function scanFailure(errorCode)
{
    console.log('Error ' + errorCode);
}

function connectSuccess(device)
{
    console.log('Successfully connected!!');
    app.connected = true;
    app.device = device; 
}

function connectFailure()
{
    app.connected = false;
    console.log('Failed to connect! :( ');
}

app.disconnect = function(errorMessage)
{
    if(errorMessage)
    {
        console.log(errorMessage);
    }
    app.connected = false;
    app.device = null;

    evothings.easyble.stopScan();
    evothings.easyble.closeConnectedDevices();
}
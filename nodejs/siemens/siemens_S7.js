import nodes7 from 'nodes7';

var houseSensor;

export function getHouseSensor() {
    return houseSensor;
}

export const connectPLC = async () => {
    try {
        //---------------------------------------------
        // Siemens S7 Communication
        //---------------------------------------------
        var conn = new nodes7;
        
        

        var variables = {
            Cucina_C1_Seduto_Al_Tavolo: 'DB1,X0.0',
            Cucina_C2_Presenza_Nella_Stanza: 'DB1,X0.1',
            Cucina_C3_Piatti_Sul_Tavolo: 'DB1,X0.2',
            Cucina_C4_Chiusura_Frigor: 'DB1,X0.2',
            Camera_B1_Sdraiato_Sul_Letto: 'DB1,X2.0',
            Camera_B2_Presenza_Nella_Stanza: 'DB1,X2.1',
            Sala_S1_Presenza_Sul_Divano: 'DB1,X4.0',
            Sala_S2_Presenza_Nella_Stanza: 'DB1,X4.1',
            Sala_S5_Passaggio_Camera_Inferiore: 'DB1,X4.5',
        };

        

        conn.initiateConnection({ port: 102, host: '192.168.1.1', rack: 0, slot: 1, debug: false }, connected);

        function connected(err) {
            if (typeof (err) !== "undefined") {
                // We have an error. Maybe the PLC is not reachable.
                console.log(err);                
            }

            conn.setTranslationCB(function (tag) { return variables[tag]; }); // This sets the "translation" to allow us to work with object names

            conn.addItems('Cucina_C1_Seduto_Al_Tavolo');
            conn.addItems('Cucina_C2_Presenza_Nella_Stanza');
            conn.addItems('Cucina_C3_Piatti_Sul_Tavolo');
            conn.addItems('Cucina_C4_Chiusura_Frigor');
            conn.addItems('Camera_B1_Sdraiato_Sul_Letto');
            conn.addItems('Camera_B2_Presenza_Nella_Stanza');
            conn.addItems('Sala_S1_Presenza_Sul_Divano');
            conn.addItems('Sala_S2_Presenza_Nella_Stanza');
            conn.addItems('Sala_S5_Passaggio_Camera_Inferiore');

            //conn.writeItems('EV_1', false, valuesWritten); // This writes a single boolean item (one bit) to true

            setInterval(() => {
                conn.readAllItems(valuesReady);
            }, 1000);

        }


        function valuesReady(anythingBad, values) {
            if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
            else {
                houseSensor = values;
            }
        }


        setInterval(() => {
           // console.log(house_Sensor);
        }, 1000);


    } catch (err) {
        console.log(err);
    }
}



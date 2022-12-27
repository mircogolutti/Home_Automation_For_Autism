import { OPCUAClient, AttributeIds } from 'node-opcua';
import async from 'async';


const client = OPCUAClient.create({ endpointMustExist: false });
const endpointUrl = "opc.tcp://192.168.1.1:4840";
let theSession = null;
let conditionOK = false;


let houseSensor = [
    { name: "Cucina_C1_Seduto_Al_Tavolo", nodeId: "ns=4;i=8", value: "false" },
    { name: "Cucina_C2_Presenza_Nella_Stanza", nodeId: "ns=4;i=9", value: "false" },
    { name: "Cucina_C3_Piatti_Sul_Tavolo", nodeId: "ns=4;i=10", value: "false" },
    { name: "Cucina_C4_Chiusura_Frigor", nodeId: "ns=4;i=11", value: "false" },
    { name: "Camera_B1_Sdraiato_Sul_Letto", nodeId: "ns=4;i=27", value: "false" },
    { name: "Camera_B2_Presenza_Nella_Stanza", nodeId: "ns=4;i=28", value: "false" },
    { name: "Sala_S1_Presenza_Sul_Divano", nodeId: "ns=4;i=46", value: "false" },
    { name: "Sala_S2_Presenza_Nella_Stanza", nodeId: "ns=4;i=47", value: "false" },
    { name: "Sala_S5_Passaggio_Camera_Inferiore", nodeId: "ns=4;i=50", value: "false" },
];


export function getHouseSensor() {
    return houseSensor;
}


export const connectPLC = async () => {

    async.series([
        function (callback) {
            client.connect(endpointUrl, (err) => {
                if (err) {
                    console.log('cannot connect to endpoint');
                } else { console.log('connected !!!'); }

                callback(err);
            })
        },

        // Create session
        function (callback) {
            client.createSession((err, session) => {
                if (err) { console.log('cannot connect to endpoint'); return; }
                theSession = session;
                callback(err);
            })
        },


        // Reading from PLC
        function () {
            let nodeId;
            setInterval(() => {

                houseSensor.forEach( sensor => {
                    nodeId = sensor.nodeId;
                    theSession.read({ nodeId, attributeId: AttributeIds.Value }, (err, dataValue) => {
                        if (!err) {
                            sensor.value = dataValue.value.value;
                            //console.log(sensor.name, " = ", sensor.value);
                        }
                    })
                })
            }, 1000);
        },
    ],

        function (err) {
            if (err) {
                console.log(" failure ", err);
                process.exit(0);
            } else {
                console.log("done!");
            }
            client.disconnect(function () { });
        });

}


export function areConditionsOK(event) {

    if (((event.value_cucina_c1_seduto_al_tavolo == houseSensor[0].value) || (!event.use_cucina_c1_seduto_al_tavolo)) &&
        ((event.value_cucina_c2_presenza_nella_stanza == houseSensor[1].value) || (!event.use_cucina_c2_presenza_nella_stanza)) &&
        ((event.value_cucina_c3_piatti_sul_tavolo == houseSensor[2].value) || (!event.use_cucina_c3_piatti_sul_tavolo)) &&
        ((event.value_cucina_c4_chiusura_frigor == houseSensor[3].value) || (!event.use_cucina_c4_chiusura_frigor)) &&
        ((event.value_camera_b1_sdraiato_sul_letto == houseSensor[4].value) || (!event.use_camera_b1_sdraiato_sul_letto)) &&
        ((event.value_camera_b2_presenza_nella_stanza == houseSensor[5].value) || (!event.use_camera_b2_presenza_nella_stanza)) &&
        ((event.value_sala_s1_presenza_sul_divano == houseSensor[6].value) || (!event.use_sala_s1_presenza_sul_divano)) &&
        ((event.value_sala_s2_presenza_nella_stanza == houseSensor[7].value) || (!event.use_sala_s2_presenza_nella_stanza)) &&
        ((event.value_sala_s5_passaggio_camera_inferiore == houseSensor[8].value) || (!event.use_sala_s5_passaggio_camera_inferiore))) {

        conditionOK = true;
    }
    else {
        conditionOK = false;
    }

    return conditionOK;
}

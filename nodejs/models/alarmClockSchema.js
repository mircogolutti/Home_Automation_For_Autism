import mongoose from "mongoose";

// Defining Schema
const alarmClockSchema = new mongoose.Schema({
  name_event: { type: String, required: true, trim: true },
  use_speech: { type: Boolean, required: false, trim: true },
  string_speech: { type: String, required: false, trim: true },
  event_done: { type: Boolean, required: false, trim: true },
  time_start_alarm: { type: Date, required: false, trim: true },
  time_stop_alarm:{ type: Date, required: false, trim: true },
  allday_alarm: { type: Boolean, required: false, trim: true },
  delay_on_event: { type: Number, required: false, trim: true },
  delay_off_event: { type: Number, required: false, trim: true },
  time_delay_on: { type: Date, required: false, trim: true },
  time_delay_off:{ type: Date, required: false, trim: true }, 
  img_name: { type: String, required: true, trim: true },
  use_cucina_c1_seduto_al_tavolo: { type: Boolean, required: false, trim: true },
  use_cucina_c2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  use_cucina_c3_piatti_sul_tavolo: { type: Boolean, required: false, trim: true },
  use_cucina_c4_chiusura_frigor: { type: Boolean, required: false, trim: true },
  use_camera_b1_sdraiato_sul_letto: { type: Boolean, required: false, trim: true },
  use_camera_b2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  use_sala_s1_presenza_sul_divano: { type: Boolean, required: false, trim: true },
  use_sala_s2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  use_sala_s5_passaggio_camera_inferiore: { type: Boolean, required: false, trim: true },
  value_cucina_c1_seduto_al_tavolo: { type: Boolean, required: false, trim: true },
  value_cucina_c2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  value_cucina_c3_piatti_sul_tavolo: { type: Boolean, required: false, trim: true },
  value_cucina_c4_chiusura_frigor: { type: Boolean, required: false, trim: true },
  value_camera_b1_sdraiato_sul_letto: { type: Boolean, required: false, trim: true },
  value_camera_b2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  value_sala_s1_presenza_sul_divano: { type: Boolean, required: false, trim: true },
  value_sala_s2_presenza_nella_stanza: { type: Boolean, required: false, trim: true },
  value_sala_s5_passaggio_camera_inferiore: { type: Boolean, required: false, trim: true },
})

export default alarmClockSchema
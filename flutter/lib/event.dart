import 'dart:convert';
import 'package:http/http.dart' as http;

class Event {
  String baseUrl = "http://127.0.0.1:8001/flutter/event";
  Future<List> getAllEvents() async {
    try {
      var response = await http.get(Uri.parse(baseUrl));
      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return Future.error("Server Error");
      }
    } catch (e) {
      return Future.error(e);
    }
  }
}

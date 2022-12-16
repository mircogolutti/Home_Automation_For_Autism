import 'package:flutter/material.dart';
import 'package:flutterapp/event.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Connect Flutter with Express',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Leonardo'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Event eventService = Event();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Container(
          child: FutureBuilder<List>(
            future: eventService.getAllEvents(),
            builder: (context, snapshot) {
              print(snapshot.data);
              if (snapshot.hasData) {
                return ListView.builder(
                  itemCount: snapshot.data?.length,
                  itemBuilder: (context, i) {
                    return Card(
                      child: ListTile(
                        title: Text(
                          snapshot.data![i]['name_event'],
                          style: TextStyle(fontSize: 30.0),
                        ),
                        subtitle: Text(
                          snapshot.data![i]['img_name'],
                          style: TextStyle(fontSize: 30.0),
                        ),
                      ),
                    );
                  },
                );
              } else {
                return const Center(
                  child: Text('No Data Found Events'),
                );
              }
            },
          ),
        ));
  }
}

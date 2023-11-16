import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { SubjectInfoData } from '../../Components/SubjectInfo';

export type MyDocumentProps = {
  completedSubjects : SubjectInfoData[],
  notCompletedSubjects : SubjectInfoData[],
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  h1: {
    textAlign: 'center',
    marginBottom: 50,
  },
  h2: {
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
  },
  completed: {
    border: '1px solid #ccc',
    padding: 10,
    marginBottom: 10,
  },
  notCompleted: {
    border: '1px solid #ccc',
    padding: 10,
    marginBottom: 10,
  },
  subject: {
    display: 'flex',
    fontSize: 14,
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: '8px 0',
  },
  subjectLast: {
    borderBottom: 'none',
  },
  completedSubject: {
    color: '#4CAF50',
  },
  notCompletedSubject: {
    color: '#FF9800',
  },
  credits: {
    fontSize: 10,
  }
});

function MyDocument ( { completedSubjects, notCompletedSubjects } : MyDocumentProps ) {

  const sum : number = completedSubjects.reduce((accumulator, currentValue) => accumulator + currentValue.credits, 0);

  return (

    <Document>
    <Page size="A4">
      <View style={styles.body}>
        <Text style={styles.h1}>Relatório de disciplinas</Text>

        <View style={styles.section}>
          <View style={styles.notCompleted}>
            <Text style={styles.h2}>Disciplinas restantes ({135 - sum}/135 créditos)</Text>
            <View style={styles.subject}>
              {notCompletedSubjects.map((subject) => (
                subject.id === 0 ? '' :
                <View key={subject.name} style={styles.subject} wrap={false}>
                  <Text style={styles.notCompletedSubject}>{subject.name}</Text>
                  <Text style={styles.credits}>{`Créditos: ${subject.credits}`}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.completed}>
            <Text style={styles.h2}>Disciplinas cursadas ({sum}/135 créditos)</Text>
            <View style={styles.subject}>
              {completedSubjects.map((subject) => (
                <View key={subject.name} style={styles.subject} wrap={false}>
                  <Text style={styles.completedSubject}>{subject.name}</Text>
                  <Text style={styles.credits}>{`Créditos: ${subject.credits}`}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

      </View>
    </Page>
  </Document>
  )
};

export default MyDocument;
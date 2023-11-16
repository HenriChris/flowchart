import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { SubjectInfoData } from '../../Components/SubjectInfo';

export type MyDocumentProps = {
  completedSubjects : SubjectInfoData[],
  notCompletedSubjects : SubjectInfoData[],
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    border: 'solid black 1px' 
  },
  subject: {
    marginBottom: 8,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  credits: {
    fontSize: 12,
  },
});

function MyDocument ( { completedSubjects, notCompletedSubjects } : MyDocumentProps ) {

  const sum: number = completedSubjects.reduce((accumulator, currentValue) => accumulator + currentValue.credits, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Disciplinas cursadas</Text>
          {completedSubjects.map((subject) => (
            <View key={subject.name} style={styles.subject}>
              <Text style={styles.subject}>{subject.name}</Text>
              <Text style={styles.credits}>{`Créditos: ${subject.credits}`}</Text>
            </View>
          ))}
          <Text style={styles.credits}>Total : {sum}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Disciplinas restantes</Text>
          {notCompletedSubjects.map((subject) => (
            <View key={subject.name} style={styles.subject}>
              <Text style={styles.subject}>{subject.name}</Text>
              <Text style={styles.credits}>{`Créditos: ${subject.credits}`}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
};

export default MyDocument;
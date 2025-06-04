import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RecommendationsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomendações e Boas Práticas</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Antes da Falta de Energia (Prevenção)</Text>
        <Text style={styles.text}>
          - Mantenha um kit de emergência com lanternas, pilhas, água, alimentos não perecíveis e um rádio a pilhas.
        </Text>
        <Text style={styles.text}>
          - Carregue completamente celulares e power banks.
        </Text>
        <Text style={styles.text}>
          - Tenha um plano de comunicação familiar para o caso de separação durante o evento.
        </Text>
        <Text style={styles.text}>
          - Desconecte aparelhos eletrônicos sensíveis para evitar danos por surtos de tensão quando a energia retornar.
        </Text>
         <Text style={styles.text}>
          - Verifique a vedação de portas e janelas para minimizar a perda de temperatura interna (frio ou calor).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Durante a Falta de Energia</Text>
        <Text style={styles.text}>
          - Use lanternas em vez de velas para evitar risco de incêndio.
        </Text>
        <Text style={styles.text}>
          - Mantenha geladeiras e freezers fechados o máximo possível para conservar os alimentos.
        </Text>
        <Text style={styles.text}>
          - Ouça o rádio a pilhas para obter informações atualizadas das autoridades locais.
        </Text>
        <Text style={styles.text}>
          - Evite sair de casa, especialmente se houver ventos fortes, inundações ou deslizamentos.
        </Text>
        <Text style={styles.text}>
          - Nunca use geradores, churrasqueiras a carvão ou fogões a gás dentro de casa ou em locais fechados devido ao risco de intoxicação por monóxido de carbono.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Após a Falta de Energia</Text>
        <Text style={styles.text}>
          - Verifique os alimentos na geladeira e freezer; descarte qualquer item que pareça estragado ou tenha odor estranho.
        </Text>
        <Text style={styles.text}>
          - Tenha cuidado ao religar aparelhos eletrônicos; espere alguns minutos após o retorno da energia para evitar picos de tensão.
        </Text>
        <Text style={styles.text}>
          - Reporte postes ou fios caídos à companhia de energia e mantenha distância.
        </Text>
         <Text style={styles.text}>
          - Ajude vizinhos, especialmente idosos ou pessoas com necessidades especiais.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 22, // Improve readability
    color: '#555',
  },
});

export default RecommendationsScreen;


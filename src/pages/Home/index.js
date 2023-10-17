import { FlatList, StyleSheet, Text, View } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '150,00',
    date: '15/10/2023',
    type: 0, //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '3.000,00',
    date: '05/10/2023',
    type: 1, //receita
  },
  {
    id: 3,
    label: 'TED Cliente Y',
    value: '15.000,00',
    date: '18/10/2023',
    type: 1, //receita
  },
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lenon Felippi" />
      <Balance expenses={"-370,00"} balance={"1.250,50"} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});

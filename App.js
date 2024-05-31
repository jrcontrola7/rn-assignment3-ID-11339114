import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/ex.jpg') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/sy.jpg') },
  { id: '3', name: 'Code', tasks: 10, image: require('./assets/cd.jpg') },
  { id: '4', name: 'Cook', tasks: 8, image: require('./assets/cook.png') },
  { id: '5', name: 'Read', tasks: 5, image: require('./assets/res.jpg') },
  { id: '6', name: 'Shop', tasks: 7, image: require('./assets/sy.jpg') },
  { id: '7', name: 'Eat', tasks: 6, image: require('./assets/cook.png') },
  { id: '8', name: 'Learn', tasks: 4, image: require('./assets/res.jpg') },
 
];

const ongoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'Pull Ups' },
  { id: '6', name: 'Information Modeling' },
  { id: '7', name: 'Engaging' },
  { id: '8', name: 'Reloading' },
  { id: '9', name: 'Office Productivity Tools' },
  { id: '10', name: 'Academic Writing ' },
  { id: '11', name: 'Captivating' },
  { id: '12', name: 'CBAS' },
  { id: '13', name: 'Mathematics' },
  { id: '14', name: 'Critical Thinking' },
  { id: '15', name: 'Artificial Intellingence' },
  
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Image source={category.image} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{category.name}</Text>
    <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
  </View>
);

const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task.name}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
        <Image source={require('./assets/close-up-man-with-glasses-beard-generative-ai_1034068-69811.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/c.png')} style={styles.filterImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 20,
    width:170,
    height: 52,
  },
  taskCount: {
    fontSize: 16,
    color: '#666',
    top: 50,
    width:170,
    height: 52,
    right:170,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    top: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    top:20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#FA6D42',
    borderRadius: 8,
    
  },
  filterImage: {
    width: 26,
    height: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    top:5,

  },
  categoriesContainer: {
    flexDirection: 'row',
    
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    top:3,
  },
  categoryImage: {
    width: 198,
    height: 200,
    left: 8,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    bottom:192,
    right:50,
   
  },
  categoryTasks: {
    fontSize: 14,
    color: '#666',
    bottom:192,
    right:50,
  },
  taskList: {
    marginTop: 10,
    width:363,
    top:2,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width:365,
    height:128,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    top:30,
    width: 200,
    height: 19,

  },
});

export default App;
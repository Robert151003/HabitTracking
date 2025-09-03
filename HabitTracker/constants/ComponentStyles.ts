import { StyleSheet } from 'react-native';

export const ComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ddd',
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    textAlign: 'center',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    padding: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  cardValue: {
    fontSize: 20,
    color: '#f4511e',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '85%',
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  // Quote styling
  quoteContainer: {
    margin: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FF8C00',
    textAlign: 'center',
  },

  // Profile-specific styling
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  motivationalText: {
    fontSize: 16,
    color: '#FF8C00',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
  },
  actionsContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
});

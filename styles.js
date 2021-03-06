import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainWrapper: {
    //flex: 1,
    backgroundColor: '#d0d0d0',

  },
  profileSafeArea1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 25
  },
  profileSafeArea2: {
    height: 40,
    marginTop: 15,
    alignSelf: "center"
  },
  profileSafeArea3: {
    width: 450,
    height: 1,
    backgroundColor: "black",
    marginTop: 20
  },
  profileNameStyle: {
    fontSize: 35,
    lineHeight: 42,
    marginLeft: 0
  },
  titleText: {
    fontSize: 60,
    textAlign: 'center',
    flexDirection: 'column'
  },
  loginButton: {
    backgroundColor: '#397BE2',
    width: 320
  },
  icon: {
    textAlign: 'center',
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  name: {
    color: "#121212",
    fontSize: 30,
    lineHeight: 14,
    marginTop: 62,
    alignSelf: "center"
  },
  rect: {
    width: 350,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 21,
    marginLeft: 12
  },
  image: {
    width: 94,
    height: 118,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 0
  },
  major: {
    color: "#121212",
    marginTop: 7
  },
  textInput3: {
    width: 139,
    height: 27,
    color: "#121212",
    marginLeft: 10
  },
  gradYear: {
    top: 7,
    left: 0,
    color: "#121212",
    position: "absolute",
  },
  biography: {
    color: "#121212",
    marginTop: 47,
    marginLeft: 37
  },
  logOut: {
    color: "#121212",
    fontSize: 30,
    lineHeight: 14,
    marginTop: 258,
    alignSelf: "center"
  },
  classes: {
    color: "#121212",
    marginTop: 39,
    marginLeft: 36
  },
  entoIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 11
  },
  textAddedRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 37,
    marginRight: 167
  },
  entoIcon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 11
  },
  textInput7Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 37,
    marginRight: 167
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 15,
    marginRight: 108
  },
  backIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  postingTextInput: {
    width: 158,
    height: 39,
    color: "#121212",
    fontSize: 30,
    marginLeft: 54
  },
  preferredDayS: {
    color: "#121212",
    fontSize: 20,
    marginTop: 36,
    marginLeft: 29
  },
  preferredTimeS: {
    color: "#121212",
    fontSize: 20,
    marginTop: 38,
    marginLeft: 30
  },
  user: {
    color: "#121212",
    fontSize: 20,
    marginTop: 52,
    marginLeft: 30
  },
  groupSize: {
    color: "#121212",
    fontSize: 20,
    marginTop: 48,
    marginLeft: 29
  },
  meeting: {
    color: "#121212",
    fontSize: 20,
    marginTop: 78,
    marginLeft: 34
  },
  chatIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 209,
    marginLeft: 166
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  form: {
    justifyContent: 'center',
    marginTop: 8,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph:{
    marginBottom: 10,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginRight: 120
  },
  cancel:{
    backgroundColor: 'red',
  },
  majorRow: {
    height: 25,
    marginRight: 16,
    marginTop: 5
  },
  textInput4: {
    top: 0,
    left: 73,
    width: 131,
    height: 27,
    color: "#121212",
    position: "absolute",
  },
  gradYearStack: {
    width: 230,
    height: 27,
    marginTop: 30
  },
  gradYearStack2: {
    width: 230,
    height: 27,
    marginTop: 50
  },
  majorRowColumn: {
    width: 245,
    marginLeft: 26,
  },
  imageRow: {
    width: 400,
    height: 118,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 37,
    marginRight: 14
  },
  otherImageRow: {
    width: 400,
    height: 118,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 10,
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow:'hidden',
    marginLeft: 15
  },
  bio: {
    width: 400,
    height: 400,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20
  },
  otherBio:{
    marginLeft: 20,
    marginRight: 20,
  },
  bioClass:{
    width: 400,
    height: 400,
    marginTop: 40
  },
  tag: {
    width: 400,
    height: 400,
    marginTop: 5
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textInput: {
    height: 38,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 0,
    borderRadius: 5,
    padding: 3,
  },
})


export { styles }

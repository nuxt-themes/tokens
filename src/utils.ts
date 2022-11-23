export default {
  my: (value) => {
    return {
      marginTop: value,
      marginBottom: value,
    }
  },
  mx: (value) => {
    return {
      marginLeft: value,
      marginRight: value,
    }
  },
  py: (value) => {
    return {
      paddingTop: value,
      paddingBottom: value,
    }
  },
  px: (value) => {
    return {
      paddingLeft: value,
      paddingRight: value,
    }
  },
}

import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-orange-500 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;









// import { TouchableOpacity, Text } from 'react-native'
// import React from 'react'

// const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
//   return (
//     <TouchableOpacity 
//         onPress={handlePress}
//         activeOpacity={0.7}
//         className={
//           `bg-orange-400 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
//         disabled={isLoading}
//     >
//       <Text className={`font-u_bold text-lg ${textStyles}`}>{title}</Text>
//     </TouchableOpacity>
//   )
// }
// export default CustomButton
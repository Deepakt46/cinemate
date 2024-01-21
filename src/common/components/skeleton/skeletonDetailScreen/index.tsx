import React from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import useStyles from './styles';

const {height, width} = Dimensions.get('window');

const Skeleton: React.FC = () => {
  const styles = useStyles();
  return (
    <SkeletonPlaceholder>
      <View style={styles.skeleton}>
        <SkeletonPlaceholder.Item
          width={width / 2 - 30}
          height={20}
          borderRadius={5}
          marginTop={10}
        />
        <SkeletonPlaceholder.Item
          width={width / 3 - 30}
          height={10}
          borderRadius={5}
          marginTop={10}
        />
        <SkeletonPlaceholder.Item
          width={width / 2 - 30}
          height={20}
          borderRadius={5}
          marginTop={10}
        />
        <SkeletonPlaceholder.Item
          width={width - 40}
          height={height / 4}
          borderRadius={5}
          marginTop={20}
        />
      </View>
    </SkeletonPlaceholder>
  );
};

const MovieDetailSkeleton = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ActivityIndicator size={'large'} />
      </View>
      <View style={styles.wrapper}>
        <Skeleton />
      </View>
    </View>
  );
};

export default MovieDetailSkeleton;

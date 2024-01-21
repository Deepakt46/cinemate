import React from 'react';
import {View, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {height, width} = Dimensions.get('window');

const TrendingMovieCardSkeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 10, alignItems: 'center'}}>
          <SkeletonPlaceholder.Item
            width={width / 2 - 30}
            height={height / 4}
            borderRadius={5}
            marginTop={10}
          />
          <SkeletonPlaceholder.Item
            width={width / 3 - 30}
            height={20}
            borderRadius={5}
            marginTop={10}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <SkeletonPlaceholder.Item
            width={width / 2 - 30}
            height={height / 4}
            borderRadius={5}
            marginTop={10}
          />
          <SkeletonPlaceholder.Item
            width={width / 3 - 30}
            height={20}
            borderRadius={5}
            marginTop={10}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default TrendingMovieCardSkeleton;

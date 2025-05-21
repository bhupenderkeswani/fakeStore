import React from "react";

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoadingComponent(props: P & { loading: boolean }) {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;

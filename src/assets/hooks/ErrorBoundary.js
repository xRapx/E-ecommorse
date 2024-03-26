import React, { useState, useEffect } from 'react';

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    return () => {
      setHasError(false); // reset the error state when unmounting
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
};

export default ErrorBoundary;


// class ErrorBoundary extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = { hasError: false };
// 	}
  
// 	static getDerivedStateFromError(error) {
// 	  // Cập nhật state để lần render tiếp theo sẽ hiển thị fallback UI.
// 	  return { hasError: true };
// 	}
  
// 	componentDidCatch(error, errorInfo) {
// 	  // Bạn cũng có thể log lỗi vào một dịch vụ báo cáo lỗi
// 	  logErrorToMyService(error, errorInfo);
// 	}
  
// 	render() {
// 	  if (this.state.hasError) {
// 		// Bạn có thể render bất kỳ custom fallback UI nào
// 		return <h1>Something went wrong.</h1>;
// 	  }
  
// 	  return this.props.children; 
// 	}
//   }
  
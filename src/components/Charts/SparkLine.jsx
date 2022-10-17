import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
    render() {
        const { id, height, width, color, data, type, currentColor } = this.props;

        return (
            <SparklineComponent
                id={id}
                height={height}
                width={width}
                dataSource={data}
                type={type}
                valueType='Numeric'
                fill={color}
                border={{ color: currentColor, width: 2 }}
                lineWidth={1}
                xName='x'
                yName='yval'
                tooltipSettings={{
                    visible: true,
                    // eslint-disable-next-line no-template-curly-in-string
                    format: '${x} : data ${yval}',
                    trackLineSettings: {
                        visible: true,
                    },
                }}
            >
                <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
        );
    }
}

export default SparkLine;

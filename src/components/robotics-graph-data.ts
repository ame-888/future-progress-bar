export type RoboticsDataPoint = {
  year: number;
  taxels: number;
  hardware_milestone: string;
};

export const ROBOTICS_BREAKEVEN = 17000;

export const ROBOTICS_DATA: RoboticsDataPoint[] = [
  {
    year: 2000,
    taxels: 5,
    hardware_milestone: "Binary Contact Switches"
  },
  {
    year: 2012,
    taxels: 95,
    hardware_milestone: "The SynTouch BioTac"
  },
  {
    year: 2017,
    taxels: 800,
    hardware_milestone: "The Optical Shift (GelSight)"
  },
  {
    year: 2023,
    taxels: 1900,
    hardware_milestone: "Dense Magnetic Arrays (XELA Robotics)"
  },
  {
    year: 2026,
    taxels: 3500,
    hardware_milestone: "The Current E-Skin Plateau"
  }
];

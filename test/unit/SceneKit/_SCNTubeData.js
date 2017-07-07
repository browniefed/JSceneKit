const source = [
  6.12323e-17, -0.5, -0.5, 1.22465e-16, 0.0, -1.0, 0.0, 1.0,
  6.12323e-17, 0.5, -0.5, 1.22465e-16, 0.0, -1.0, 0.0, 0.0,
  -0.0652631, -0.5, -0.495722, -0.130526, 0.0, -0.991445, 0.0208333, 1.0,
  -0.0652631, 0.5, -0.495722, -0.130526, 0.0, -0.991445, 0.0208333, 0.0,
  -0.12941, -0.5, -0.482963, -0.258819, 0.0, -0.965926, 0.0416667, 1.0,
  -0.12941, 0.5, -0.482963, -0.258819, 0.0, -0.965926, 0.0416667, 0.0,
  -0.191342, -0.5, -0.46194, -0.382683, 0.0, -0.92388, 0.0625, 1.0,
  -0.191342, 0.5, -0.46194, -0.382683, 0.0, -0.92388, 0.0625, 0.0,
  -0.25, -0.5, -0.433013, -0.5, 0.0, -0.866025, 0.0833333, 1.0,
  -0.25, 0.5, -0.433013, -0.5, 0.0, -0.866025, 0.0833333, 0.0,
  -0.304381, -0.5, -0.396677, -0.608761, 0.0, -0.793353, 0.104167, 1.0,
  -0.304381, 0.5, -0.396677, -0.608761, 0.0, -0.793353, 0.104167, 0.0,
  -0.353553, -0.5, -0.353553, -0.707107, 0.0, -0.707107, 0.125, 1.0,
  -0.353553, 0.5, -0.353553, -0.707107, 0.0, -0.707107, 0.125, 0.0,
  -0.396677, -0.5, -0.304381, -0.793353, 0.0, -0.608761, 0.145833, 1.0,
  -0.396677, 0.5, -0.304381, -0.793353, 0.0, -0.608761, 0.145833, 0.0,
  -0.433013, -0.5, -0.25, -0.866025, 0.0, -0.5, 0.166667, 1.0,
  -0.433013, 0.5, -0.25, -0.866025, 0.0, -0.5, 0.166667, 0.0,
  -0.46194, -0.5, -0.191342, -0.92388, 0.0, -0.382683, 0.1875, 1.0,
  -0.46194, 0.5, -0.191342, -0.92388, 0.0, -0.382683, 0.1875, 0.0,
  -0.482963, -0.5, -0.12941, -0.965926, 0.0, -0.258819, 0.208333, 1.0,
  -0.482963, 0.5, -0.12941, -0.965926, 0.0, -0.258819, 0.208333, 0.0,
  -0.495722, -0.5, -0.0652631, -0.991445, 0.0, -0.130526, 0.229167, 1.0,
  -0.495722, 0.5, -0.0652631, -0.991445, 0.0, -0.130526, 0.229167, 0.0,
  -0.5, -0.5, -9.18485e-17, -1.0, 0.0, -1.83697e-16, 0.25, 1.0,
  -0.5, 0.5, -9.18485e-17, -1.0, 0.0, -1.83697e-16, 0.25, 0.0,
  -0.495722, -0.5, 0.0652631, -0.991445, 0.0, 0.130526, 0.270833, 1.0,
  -0.495722, 0.5, 0.0652631, -0.991445, 0.0, 0.130526, 0.270833, 0.0,
  -0.482963, -0.5, 0.129409, -0.965926, 0.0, 0.258819, 0.291667, 1.0,
  -0.482963, 0.5, 0.129409, -0.965926, 0.0, 0.258819, 0.291667, 0.0,
  -0.46194, -0.5, 0.191342, -0.92388, 0.0, 0.382683, 0.3125, 1.0,
  -0.46194, 0.5, 0.191342, -0.92388, 0.0, 0.382683, 0.3125, 0.0,
  -0.433013, -0.5, 0.25, -0.866025, 0.0, 0.5, 0.333333, 1.0,
  -0.433013, 0.5, 0.25, -0.866025, 0.0, 0.5, 0.333333, 0.0,
  -0.396677, -0.5, 0.304381, -0.793353, 0.0, 0.608761, 0.354167, 1.0,
  -0.396677, 0.5, 0.304381, -0.793353, 0.0, 0.608761, 0.354167, 0.0,
  -0.353553, -0.5, 0.353553, -0.707107, 0.0, 0.707107, 0.375, 1.0,
  -0.353553, 0.5, 0.353553, -0.707107, 0.0, 0.707107, 0.375, 0.0,
  -0.304381, -0.5, 0.396677, -0.608761, 0.0, 0.793353, 0.395833, 1.0,
  -0.304381, 0.5, 0.396677, -0.608761, 0.0, 0.793353, 0.395833, 0.0,
  -0.25, -0.5, 0.433013, -0.5, 0.0, 0.866025, 0.416667, 1.0,
  -0.25, 0.5, 0.433013, -0.5, 0.0, 0.866025, 0.416667, 0.0,
  -0.191342, -0.5, 0.46194, -0.382683, 0.0, 0.92388, 0.4375, 1.0,
  -0.191342, 0.5, 0.46194, -0.382683, 0.0, 0.92388, 0.4375, 0.0,
  -0.129409, -0.5, 0.482963, -0.258819, 0.0, 0.965926, 0.458333, 1.0,
  -0.129409, 0.5, 0.482963, -0.258819, 0.0, 0.965926, 0.458333, 0.0,
  -0.0652631, -0.5, 0.495722, -0.130526, 0.0, 0.991445, 0.479167, 1.0,
  -0.0652631, 0.5, 0.495722, -0.130526, 0.0, 0.991445, 0.479167, 0.0,
  -1.22465e-16, -0.5, 0.5, -2.44929e-16, 0.0, 1.0, 0.5, 1.0,
  -1.22465e-16, 0.5, 0.5, -2.44929e-16, 0.0, 1.0, 0.5, 0.0,
  0.065263, -0.5, 0.495722, 0.130526, 0.0, 0.991445, 0.520833, 1.0,
  0.065263, 0.5, 0.495722, 0.130526, 0.0, 0.991445, 0.520833, 0.0,
  0.12941, -0.5, 0.482963, 0.258819, 0.0, 0.965926, 0.541667, 1.0,
  0.12941, 0.5, 0.482963, 0.258819, 0.0, 0.965926, 0.541667, 0.0,
  0.191342, -0.5, 0.46194, 0.382683, 0.0, 0.92388, 0.5625, 1.0,
  0.191342, 0.5, 0.46194, 0.382683, 0.0, 0.92388, 0.5625, 0.0,
  0.25, -0.5, 0.433013, 0.5, 0.0, 0.866025, 0.583333, 1.0,
  0.25, 0.5, 0.433013, 0.5, 0.0, 0.866025, 0.583333, 0.0,
  0.304381, -0.5, 0.396677, 0.608762, 0.0, 0.793353, 0.604167, 1.0,
  0.304381, 0.5, 0.396677, 0.608762, 0.0, 0.793353, 0.604167, 0.0,
  0.353553, -0.5, 0.353553, 0.707107, 0.0, 0.707107, 0.625, 1.0,
  0.353553, 0.5, 0.353553, 0.707107, 0.0, 0.707107, 0.625, 0.0,
  0.396677, -0.5, 0.304381, 0.793353, 0.0, 0.608762, 0.645833, 1.0,
  0.396677, 0.5, 0.304381, 0.793353, 0.0, 0.608762, 0.645833, 0.0,
  0.433013, -0.5, 0.25, 0.866025, 0.0, 0.5, 0.666667, 1.0,
  0.433013, 0.5, 0.25, 0.866025, 0.0, 0.5, 0.666667, 0.0,
  0.46194, -0.5, 0.191342, 0.92388, 0.0, 0.382683, 0.6875, 1.0,
  0.46194, 0.5, 0.191342, 0.92388, 0.0, 0.382683, 0.6875, 0.0,
  0.482963, -0.5, 0.12941, 0.965926, 0.0, 0.258819, 0.708333, 1.0,
  0.482963, 0.5, 0.12941, 0.965926, 0.0, 0.258819, 0.708333, 0.0,
  0.495722, -0.5, 0.065263, 0.991445, 0.0, 0.130526, 0.729167, 1.0,
  0.495722, 0.5, 0.065263, 0.991445, 0.0, 0.130526, 0.729167, 0.0,
  0.5, -0.5, 1.53081e-16, 1.0, 0.0, 3.06162e-16, 0.75, 1.0,
  0.5, 0.5, 1.53081e-16, 1.0, 0.0, 3.06162e-16, 0.75, 0.0,
  0.495722, -0.5, -0.065263, 0.991445, 0.0, -0.130526, 0.770833, 1.0,
  0.495722, 0.5, -0.065263, 0.991445, 0.0, -0.130526, 0.770833, 0.0,
  0.482963, -0.5, -0.12941, 0.965926, 0.0, -0.258819, 0.791667, 1.0,
  0.482963, 0.5, -0.12941, 0.965926, 0.0, -0.258819, 0.791667, 0.0,
  0.46194, -0.5, -0.191342, 0.92388, 0.0, -0.382683, 0.8125, 1.0,
  0.46194, 0.5, -0.191342, 0.92388, 0.0, -0.382683, 0.8125, 0.0,
  0.433013, -0.5, -0.25, 0.866025, 0.0, -0.5, 0.833333, 1.0,
  0.433013, 0.5, -0.25, 0.866025, 0.0, -0.5, 0.833333, 0.0,
  0.396677, -0.5, -0.304381, 0.793353, 0.0, -0.608762, 0.854167, 1.0,
  0.396677, 0.5, -0.304381, 0.793353, 0.0, -0.608762, 0.854167, 0.0,
  0.353553, -0.5, -0.353553, 0.707107, 0.0, -0.707107, 0.875, 1.0,
  0.353553, 0.5, -0.353553, 0.707107, 0.0, -0.707107, 0.875, 0.0,
  0.304381, -0.5, -0.396677, 0.608762, 0.0, -0.793353, 0.895833, 1.0,
  0.304381, 0.5, -0.396677, 0.608762, 0.0, -0.793353, 0.895833, 0.0,
  0.25, -0.5, -0.433013, 0.5, 0.0, -0.866025, 0.916667, 1.0,
  0.25, 0.5, -0.433013, 0.5, 0.0, -0.866025, 0.916667, 0.0,
  0.191342, -0.5, -0.46194, 0.382683, 0.0, -0.92388, 0.9375, 1.0,
  0.191342, 0.5, -0.46194, 0.382683, 0.0, -0.92388, 0.9375, 0.0,
  0.12941, -0.5, -0.482963, 0.258819, 0.0, -0.965926, 0.958333, 1.0,
  0.12941, 0.5, -0.482963, 0.258819, 0.0, -0.965926, 0.958333, 0.0,
  0.065263, -0.5, -0.495722, 0.130526, 0.0, -0.991445, 0.979167, 1.0,
  0.065263, 0.5, -0.495722, 0.130526, 0.0, -0.991445, 0.979167, 0.0,
  1.83697e-16, -0.5, -0.5, 3.67394e-16, 0.0, -1.0, 1.0, 1.0,
  1.83697e-16, 0.5, -0.5, 3.67394e-16, 0.0, -1.0, 1.0, 0.0,
  -0.0, 0.5, -0.25, 0.0, 0.0, 1.0, 1.0, 0.0,
  -0.0, -0.5, -0.25, 0.0, 0.0, 1.0, 1.0, 1.0,
  -0.0326315, 0.5, -0.247861, 0.130526, 0.0, 0.991445, 0.979167, 0.0,
  -0.0326315, -0.5, -0.247861, 0.130526, 0.0, 0.991445, 0.979167, 1.0,
  -0.0647048, 0.5, -0.241481, 0.258819, 0.0, 0.965926, 0.958333, 0.0,
  -0.0647048, -0.5, -0.241481, 0.258819, 0.0, 0.965926, 0.958333, 1.0,
  -0.0956709, 0.5, -0.23097, 0.382683, 0.0, 0.92388, 0.9375, 0.0,
  -0.0956709, -0.5, -0.23097, 0.382683, 0.0, 0.92388, 0.9375, 1.0,
  -0.125, 0.5, -0.216506, 0.5, 0.0, 0.866025, 0.916667, 0.0,
  -0.125, -0.5, -0.216506, 0.5, 0.0, 0.866025, 0.916667, 1.0,
  -0.15219, 0.5, -0.198338, 0.608761, 0.0, 0.793353, 0.895833, 0.0,
  -0.15219, -0.5, -0.198338, 0.608761, 0.0, 0.793353, 0.895833, 1.0,
  -0.176777, 0.5, -0.176777, 0.707107, 0.0, 0.707107, 0.875, 0.0,
  -0.176777, -0.5, -0.176777, 0.707107, 0.0, 0.707107, 0.875, 1.0,
  -0.198338, 0.5, -0.15219, 0.793353, 0.0, 0.608761, 0.854167, 0.0,
  -0.198338, -0.5, -0.15219, 0.793353, 0.0, 0.608761, 0.854167, 1.0,
  -0.216506, 0.5, -0.125, 0.866025, 0.0, 0.5, 0.833333, 0.0,
  -0.216506, -0.5, -0.125, 0.866025, 0.0, 0.5, 0.833333, 1.0,
  -0.23097, 0.5, -0.0956709, 0.92388, 0.0, 0.382683, 0.8125, 0.0,
  -0.23097, -0.5, -0.0956709, 0.92388, 0.0, 0.382683, 0.8125, 1.0,
  -0.241481, 0.5, -0.0647048, 0.965926, 0.0, 0.258819, 0.791667, 0.0,
  -0.241481, -0.5, -0.0647048, 0.965926, 0.0, 0.258819, 0.791667, 1.0,
  -0.247861, 0.5, -0.0326315, 0.991445, 0.0, 0.130526, 0.770833, 0.0,
  -0.247861, -0.5, -0.0326315, 0.991445, 0.0, 0.130526, 0.770833, 1.0,
  -0.25, 0.5, -1.53081e-17, 1.0, 0.0, 6.12323e-17, 0.75, 0.0,
  -0.25, -0.5, -1.53081e-17, 1.0, 0.0, 6.12323e-17, 0.75, 1.0,
  -0.247861, 0.5, 0.0326316, 0.991445, 0.0, -0.130526, 0.729167, 0.0,
  -0.247861, -0.5, 0.0326316, 0.991445, 0.0, -0.130526, 0.729167, 1.0,
  -0.241481, 0.5, 0.0647047, 0.965926, 0.0, -0.258819, 0.708333, 0.0,
  -0.241481, -0.5, 0.0647047, 0.965926, 0.0, -0.258819, 0.708333, 1.0,
  -0.23097, 0.5, 0.0956709, 0.92388, 0.0, -0.382683, 0.6875, 0.0,
  -0.23097, -0.5, 0.0956709, 0.92388, 0.0, -0.382683, 0.6875, 1.0,
  -0.216506, 0.5, 0.125, 0.866025, 0.0, -0.5, 0.666667, 0.0,
  -0.216506, -0.5, 0.125, 0.866025, 0.0, -0.5, 0.666667, 1.0,
  -0.198338, 0.5, 0.15219, 0.793353, 0.0, -0.608761, 0.645833, 0.0,
  -0.198338, -0.5, 0.15219, 0.793353, 0.0, -0.608761, 0.645833, 1.0,
  -0.176777, 0.5, 0.176777, 0.707107, 0.0, -0.707107, 0.625, 0.0,
  -0.176777, -0.5, 0.176777, 0.707107, 0.0, -0.707107, 0.625, 1.0,
  -0.15219, 0.5, 0.198338, 0.608761, 0.0, -0.793353, 0.604167, 0.0,
  -0.15219, -0.5, 0.198338, 0.608761, 0.0, -0.793353, 0.604167, 1.0,
  -0.125, 0.5, 0.216506, 0.5, 0.0, -0.866025, 0.583333, 0.0,
  -0.125, -0.5, 0.216506, 0.5, 0.0, -0.866025, 0.583333, 1.0,
  -0.0956709, 0.5, 0.23097, 0.382683, 0.0, -0.92388, 0.5625, 0.0,
  -0.0956709, -0.5, 0.23097, 0.382683, 0.0, -0.92388, 0.5625, 1.0,
  -0.0647047, 0.5, 0.241481, 0.258819, 0.0, -0.965926, 0.541667, 0.0,
  -0.0647047, -0.5, 0.241481, 0.258819, 0.0, -0.965926, 0.541667, 1.0,
  -0.0326316, 0.5, 0.247861, 0.130526, 0.0, -0.991445, 0.520833, 0.0,
  -0.0326316, -0.5, 0.247861, 0.130526, 0.0, -0.991445, 0.520833, 1.0,
  -3.06162e-17, 0.5, 0.25, 1.22465e-16, 0.0, -1.0, 0.5, 0.0,
  -3.06162e-17, -0.5, 0.25, 1.22465e-16, 0.0, -1.0, 0.5, 1.0,
  0.0326315, 0.5, 0.247861, -0.130526, 0.0, -0.991445, 0.479167, 0.0,
  0.0326315, -0.5, 0.247861, -0.130526, 0.0, -0.991445, 0.479167, 1.0,
  0.0647048, 0.5, 0.241481, -0.258819, 0.0, -0.965926, 0.458333, 0.0,
  0.0647048, -0.5, 0.241481, -0.258819, 0.0, -0.965926, 0.458333, 1.0,
  0.0956709, 0.5, 0.23097, -0.382683, 0.0, -0.92388, 0.4375, 0.0,
  0.0956709, -0.5, 0.23097, -0.382683, 0.0, -0.92388, 0.4375, 1.0,
  0.125, 0.5, 0.216506, -0.5, 0.0, -0.866025, 0.416667, 0.0,
  0.125, -0.5, 0.216506, -0.5, 0.0, -0.866025, 0.416667, 1.0,
  0.15219, 0.5, 0.198338, -0.608762, 0.0, -0.793353, 0.395833, 0.0,
  0.15219, -0.5, 0.198338, -0.608762, 0.0, -0.793353, 0.395833, 1.0,
  0.176777, 0.5, 0.176777, -0.707107, 0.0, -0.707107, 0.375, 0.0,
  0.176777, -0.5, 0.176777, -0.707107, 0.0, -0.707107, 0.375, 1.0,
  0.198338, 0.5, 0.15219, -0.793353, 0.0, -0.608762, 0.354167, 0.0,
  0.198338, -0.5, 0.15219, -0.793353, 0.0, -0.608762, 0.354167, 1.0,
  0.216506, 0.5, 0.125, -0.866025, 0.0, -0.5, 0.333333, 0.0,
  0.216506, -0.5, 0.125, -0.866025, 0.0, -0.5, 0.333333, 1.0,
  0.23097, 0.5, 0.0956709, -0.92388, 0.0, -0.382683, 0.3125, 0.0,
  0.23097, -0.5, 0.0956709, -0.92388, 0.0, -0.382683, 0.3125, 1.0,
  0.241481, 0.5, 0.0647048, -0.965926, 0.0, -0.258819, 0.291667, 0.0,
  0.241481, -0.5, 0.0647048, -0.965926, 0.0, -0.258819, 0.291667, 1.0,
  0.247861, 0.5, 0.0326315, -0.991445, 0.0, -0.130526, 0.270833, 0.0,
  0.247861, -0.5, 0.0326315, -0.991445, 0.0, -0.130526, 0.270833, 1.0,
  0.25, 0.5, 4.59243e-17, -1.0, 0.0, -1.83697e-16, 0.25, 0.0,
  0.25, -0.5, 4.59243e-17, -1.0, 0.0, -1.83697e-16, 0.25, 1.0,
  0.247861, 0.5, -0.0326315, -0.991445, 0.0, 0.130526, 0.229167, 0.0,
  0.247861, -0.5, -0.0326315, -0.991445, 0.0, 0.130526, 0.229167, 1.0,
  0.241481, 0.5, -0.0647048, -0.965926, 0.0, 0.258819, 0.208333, 0.0,
  0.241481, -0.5, -0.0647048, -0.965926, 0.0, 0.258819, 0.208333, 1.0,
  0.23097, 0.5, -0.0956709, -0.92388, 0.0, 0.382683, 0.1875, 0.0,
  0.23097, -0.5, -0.0956709, -0.92388, 0.0, 0.382683, 0.1875, 1.0,
  0.216506, 0.5, -0.125, -0.866025, 0.0, 0.5, 0.166667, 0.0,
  0.216506, -0.5, -0.125, -0.866025, 0.0, 0.5, 0.166667, 1.0,
  0.198338, 0.5, -0.15219, -0.793353, 0.0, 0.608762, 0.145833, 0.0,
  0.198338, -0.5, -0.15219, -0.793353, 0.0, 0.608762, 0.145833, 1.0,
  0.176777, 0.5, -0.176777, -0.707107, 0.0, 0.707107, 0.125, 0.0,
  0.176777, -0.5, -0.176777, -0.707107, 0.0, 0.707107, 0.125, 1.0,
  0.15219, 0.5, -0.198338, -0.608762, 0.0, 0.793353, 0.104167, 0.0,
  0.15219, -0.5, -0.198338, -0.608762, 0.0, 0.793353, 0.104167, 1.0,
  0.125, 0.5, -0.216506, -0.5, 0.0, 0.866025, 0.0833333, 0.0,
  0.125, -0.5, -0.216506, -0.5, 0.0, 0.866025, 0.0833333, 1.0,
  0.0956709, 0.5, -0.23097, -0.382683, 0.0, 0.92388, 0.0625, 0.0,
  0.0956709, -0.5, -0.23097, -0.382683, 0.0, 0.92388, 0.0625, 1.0,
  0.0647048, 0.5, -0.241481, -0.258819, 0.0, 0.965926, 0.0416667, 0.0,
  0.0647048, -0.5, -0.241481, -0.258819, 0.0, 0.965926, 0.0416667, 1.0,
  0.0326315, 0.5, -0.247861, -0.130526, 0.0, 0.991445, 0.0208333, 0.0,
  0.0326315, -0.5, -0.247861, -0.130526, 0.0, 0.991445, 0.0208333, 1.0,
  6.12323e-17, 0.5, -0.25, -2.44929e-16, 0.0, 1.0, 0.0, 0.0,
  6.12323e-17, -0.5, -0.25, -2.44929e-16, 0.0, 1.0, 0.0, 1.0,
  6.12323e-17, 0.5, -0.5, 0.0, 1.0, 0.0, 1.0, 0.5,
  3.06162e-17, 0.5, -0.25, 0.0, 1.0, 0.0, 0.75, 0.5,
  -0.0652631, 0.5, -0.495722, 0.0, 1.0, 0.0, 0.995722, 0.565263,
  -0.0326315, 0.5, -0.247861, 0.0, 1.0, 0.0, 0.747861, 0.532632,
  -0.12941, 0.5, -0.482963, 0.0, 1.0, 0.0, 0.982963, 0.62941,
  -0.0647048, 0.5, -0.241481, 0.0, 1.0, 0.0, 0.741481, 0.564705,
  -0.191342, 0.5, -0.46194, 0.0, 1.0, 0.0, 0.96194, 0.691342,
  -0.0956709, 0.5, -0.23097, 0.0, 1.0, 0.0, 0.73097, 0.595671,
  -0.25, 0.5, -0.433013, 0.0, 1.0, 0.0, 0.933013, 0.75,
  -0.125, 0.5, -0.216506, 0.0, 1.0, 0.0, 0.716506, 0.625,
  -0.304381, 0.5, -0.396677, 0.0, 1.0, 0.0, 0.896677, 0.804381,
  -0.15219, 0.5, -0.198338, 0.0, 1.0, 0.0, 0.698338, 0.65219,
  -0.353553, 0.5, -0.353553, 0.0, 1.0, 0.0, 0.853553, 0.853553,
  -0.176777, 0.5, -0.176777, 0.0, 1.0, 0.0, 0.676777, 0.676777,
  -0.396677, 0.5, -0.304381, 0.0, 1.0, 0.0, 0.804381, 0.896677,
  -0.198338, 0.5, -0.15219, 0.0, 1.0, 0.0, 0.65219, 0.698338,
  -0.433013, 0.5, -0.25, 0.0, 1.0, 0.0, 0.75, 0.933013,
  -0.216506, 0.5, -0.125, 0.0, 1.0, 0.0, 0.625, 0.716506,
  -0.46194, 0.5, -0.191342, 0.0, 1.0, 0.0, 0.691342, 0.96194,
  -0.23097, 0.5, -0.0956709, 0.0, 1.0, 0.0, 0.595671, 0.73097,
  -0.482963, 0.5, -0.12941, 0.0, 1.0, 0.0, 0.62941, 0.982963,
  -0.241481, 0.5, -0.0647048, 0.0, 1.0, 0.0, 0.564705, 0.741481,
  -0.495722, 0.5, -0.0652631, 0.0, 1.0, 0.0, 0.565263, 0.995722,
  -0.247861, 0.5, -0.0326315, 0.0, 1.0, 0.0, 0.532632, 0.747861,
  -0.5, 0.5, -9.18485e-17, 0.0, 1.0, 0.0, 0.5, 1.0,
  -0.25, 0.5, -4.59243e-17, 0.0, 1.0, 0.0, 0.5, 0.75,
  -0.495722, 0.5, 0.0652631, 0.0, 1.0, 0.0, 0.434737, 0.995722,
  -0.247861, 0.5, 0.0326316, 0.0, 1.0, 0.0, 0.467368, 0.747861,
  -0.482963, 0.5, 0.129409, 0.0, 1.0, 0.0, 0.370591, 0.982963,
  -0.241481, 0.5, 0.0647047, 0.0, 1.0, 0.0, 0.435295, 0.741481,
  -0.46194, 0.5, 0.191342, 0.0, 1.0, 0.0, 0.308658, 0.96194,
  -0.23097, 0.5, 0.0956709, 0.0, 1.0, 0.0, 0.404329, 0.73097,
  -0.433013, 0.5, 0.25, 0.0, 1.0, 0.0, 0.25, 0.933013,
  -0.216506, 0.5, 0.125, 0.0, 1.0, 0.0, 0.375, 0.716506,
  -0.396677, 0.5, 0.304381, 0.0, 1.0, 0.0, 0.195619, 0.896677,
  -0.198338, 0.5, 0.15219, 0.0, 1.0, 0.0, 0.34781, 0.698338,
  -0.353553, 0.5, 0.353553, 0.0, 1.0, 0.0, 0.146447, 0.853553,
  -0.176777, 0.5, 0.176777, 0.0, 1.0, 0.0, 0.323223, 0.676777,
  -0.304381, 0.5, 0.396677, 0.0, 1.0, 0.0, 0.103323, 0.804381,
  -0.15219, 0.5, 0.198338, 0.0, 1.0, 0.0, 0.301662, 0.65219,
  -0.25, 0.5, 0.433013, 0.0, 1.0, 0.0, 0.0669873, 0.75,
  -0.125, 0.5, 0.216506, 0.0, 1.0, 0.0, 0.283494, 0.625,
  -0.191342, 0.5, 0.46194, 0.0, 1.0, 0.0, 0.0380602, 0.691342,
  -0.0956709, 0.5, 0.23097, 0.0, 1.0, 0.0, 0.26903, 0.595671,
  -0.129409, 0.5, 0.482963, 0.0, 1.0, 0.0, 0.0170371, 0.629409,
  -0.0647047, 0.5, 0.241481, 0.0, 1.0, 0.0, 0.258519, 0.564705,
  -0.0652631, 0.5, 0.495722, 0.0, 1.0, 0.0, 0.00427757, 0.565263,
  -0.0326316, 0.5, 0.247861, 0.0, 1.0, 0.0, 0.252139, 0.532632,
  -1.22465e-16, 0.5, 0.5, 0.0, 1.0, 0.0, 0.0, 0.5,
  -6.12323e-17, 0.5, 0.25, 0.0, 1.0, 0.0, 0.25, 0.5,
  0.065263, 0.5, 0.495722, 0.0, 1.0, 0.0, 0.00427756, 0.434737,
  0.0326315, 0.5, 0.247861, 0.0, 1.0, 0.0, 0.252139, 0.467368,
  0.12941, 0.5, 0.482963, 0.0, 1.0, 0.0, 0.0170371, 0.37059,
  0.0647048, 0.5, 0.241481, 0.0, 1.0, 0.0, 0.258519, 0.435295,
  0.191342, 0.5, 0.46194, 0.0, 1.0, 0.0, 0.0380602, 0.308658,
  0.0956709, 0.5, 0.23097, 0.0, 1.0, 0.0, 0.26903, 0.404329,
  0.25, 0.5, 0.433013, 0.0, 1.0, 0.0, 0.0669873, 0.25,
  0.125, 0.5, 0.216506, 0.0, 1.0, 0.0, 0.283494, 0.375,
  0.304381, 0.5, 0.396677, 0.0, 1.0, 0.0, 0.103323, 0.195619,
  0.15219, 0.5, 0.198338, 0.0, 1.0, 0.0, 0.301662, 0.34781,
  0.353553, 0.5, 0.353553, 0.0, 1.0, 0.0, 0.146447, 0.146447,
  0.176777, 0.5, 0.176777, 0.0, 1.0, 0.0, 0.323223, 0.323223,
  0.396677, 0.5, 0.304381, 0.0, 1.0, 0.0, 0.195619, 0.103323,
  0.198338, 0.5, 0.15219, 0.0, 1.0, 0.0, 0.34781, 0.301662,
  0.433013, 0.5, 0.25, 0.0, 1.0, 0.0, 0.25, 0.0669873,
  0.216506, 0.5, 0.125, 0.0, 1.0, 0.0, 0.375, 0.283494,
  0.46194, 0.5, 0.191342, 0.0, 1.0, 0.0, 0.308658, 0.0380602,
  0.23097, 0.5, 0.0956709, 0.0, 1.0, 0.0, 0.404329, 0.26903,
  0.482963, 0.5, 0.12941, 0.0, 1.0, 0.0, 0.37059, 0.0170371,
  0.241481, 0.5, 0.0647048, 0.0, 1.0, 0.0, 0.435295, 0.258519,
  0.495722, 0.5, 0.065263, 0.0, 1.0, 0.0, 0.434737, 0.00427756,
  0.247861, 0.5, 0.0326315, 0.0, 1.0, 0.0, 0.467368, 0.252139,
  0.5, 0.5, 1.53081e-16, 0.0, 1.0, 0.0, 0.5, 0.0,
  0.25, 0.5, 7.65404e-17, 0.0, 1.0, 0.0, 0.5, 0.25,
  0.495722, 0.5, -0.065263, 0.0, 1.0, 0.0, 0.565263, 0.00427756,
  0.247861, 0.5, -0.0326315, 0.0, 1.0, 0.0, 0.532632, 0.252139,
  0.482963, 0.5, -0.12941, 0.0, 1.0, 0.0, 0.62941, 0.0170371,
  0.241481, 0.5, -0.0647048, 0.0, 1.0, 0.0, 0.564705, 0.258519,
  0.46194, 0.5, -0.191342, 0.0, 1.0, 0.0, 0.691342, 0.0380602,
  0.23097, 0.5, -0.0956709, 0.0, 1.0, 0.0, 0.595671, 0.26903,
  0.433013, 0.5, -0.25, 0.0, 1.0, 0.0, 0.75, 0.0669873,
  0.216506, 0.5, -0.125, 0.0, 1.0, 0.0, 0.625, 0.283494,
  0.396677, 0.5, -0.304381, 0.0, 1.0, 0.0, 0.804381, 0.103323,
  0.198338, 0.5, -0.15219, 0.0, 1.0, 0.0, 0.65219, 0.301662,
  0.353553, 0.5, -0.353553, 0.0, 1.0, 0.0, 0.853553, 0.146447,
  0.176777, 0.5, -0.176777, 0.0, 1.0, 0.0, 0.676777, 0.323223,
  0.304381, 0.5, -0.396677, 0.0, 1.0, 0.0, 0.896677, 0.195619,
  0.15219, 0.5, -0.198338, 0.0, 1.0, 0.0, 0.698338, 0.34781,
  0.25, 0.5, -0.433013, 0.0, 1.0, 0.0, 0.933013, 0.25,
  0.125, 0.5, -0.216506, 0.0, 1.0, 0.0, 0.716506, 0.375,
  0.191342, 0.5, -0.46194, 0.0, 1.0, 0.0, 0.96194, 0.308658,
  0.0956709, 0.5, -0.23097, 0.0, 1.0, 0.0, 0.73097, 0.404329,
  0.12941, 0.5, -0.482963, 0.0, 1.0, 0.0, 0.982963, 0.37059,
  0.0647048, 0.5, -0.241481, 0.0, 1.0, 0.0, 0.741481, 0.435295,
  0.065263, 0.5, -0.495722, 0.0, 1.0, 0.0, 0.995722, 0.434737,
  0.0326315, 0.5, -0.247861, 0.0, 1.0, 0.0, 0.747861, 0.467368,
  1.83697e-16, 0.5, -0.5, 0.0, 1.0, 0.0, 1.0, 0.5,
  9.18485e-17, 0.5, -0.25, 0.0, 1.0, 0.0, 0.75, 0.5,
  -8.74228e-08, -0.5, -0.5, 0.0, -1.0, 0.0, 1.0, 0.5,
  -4.37114e-08, -0.5, -0.25, 0.0, -1.0, 0.0, 0.75, 0.5,
  0.065263, -0.5, -0.495722, 0.0, -1.0, 0.0, 0.995722, 0.565263,
  0.0326315, -0.5, -0.247861, 0.0, -1.0, 0.0, 0.747861, 0.532632,
  0.129409, -0.5, -0.482963, 0.0, -1.0, 0.0, 0.982963, 0.62941,
  0.0647047, -0.5, -0.241481, 0.0, -1.0, 0.0, 0.741481, 0.564705,
  0.191342, -0.5, -0.46194, 0.0, -1.0, 0.0, 0.96194, 0.691342,
  0.0956708, -0.5, -0.23097, 0.0, -1.0, 0.0, 0.73097, 0.595671,
  0.25, -0.5, -0.433013, 0.0, -1.0, 0.0, 0.933013, 0.75,
  0.125, -0.5, -0.216506, 0.0, -1.0, 0.0, 0.716506, 0.625,
  0.304381, -0.5, -0.396677, 0.0, -1.0, 0.0, 0.896677, 0.804381,
  0.15219, -0.5, -0.198338, 0.0, -1.0, 0.0, 0.698338, 0.65219,
  0.353553, -0.5, -0.353553, 0.0, -1.0, 0.0, 0.853553, 0.853553,
  0.176777, -0.5, -0.176777, 0.0, -1.0, 0.0, 0.676777, 0.676777,
  0.396677, -0.5, -0.304381, 0.0, -1.0, 0.0, 0.804381, 0.896677,
  0.198338, -0.5, -0.15219, 0.0, -1.0, 0.0, 0.65219, 0.698338,
  0.433013, -0.5, -0.25, 0.0, -1.0, 0.0, 0.75, 0.933013,
  0.216506, -0.5, -0.125, 0.0, -1.0, 0.0, 0.625, 0.716506,
  0.46194, -0.5, -0.191342, 0.0, -1.0, 0.0, 0.691342, 0.96194,
  0.23097, -0.5, -0.0956709, 0.0, -1.0, 0.0, 0.595671, 0.73097,
  0.482963, -0.5, -0.12941, 0.0, -1.0, 0.0, 0.62941, 0.982963,
  0.241481, -0.5, -0.0647048, 0.0, -1.0, 0.0, 0.564705, 0.741481,
  0.495722, -0.5, -0.0652632, 0.0, -1.0, 0.0, 0.565263, 0.995722,
  0.247861, -0.5, -0.0326316, 0.0, -1.0, 0.0, 0.532632, 0.747861,
  0.5, -0.5, -8.74228e-08, 0.0, -1.0, 0.0, 0.5, 1.0,
  0.25, -0.5, -4.37114e-08, 0.0, -1.0, 0.0, 0.5, 0.75,
  0.495722, -0.5, 0.065263, 0.0, -1.0, 0.0, 0.434737, 0.995722,
  0.247861, -0.5, 0.0326315, 0.0, -1.0, 0.0, 0.467368, 0.747861,
  0.482963, -0.5, 0.129409, 0.0, -1.0, 0.0, 0.370591, 0.982963,
  0.241481, -0.5, 0.0647047, 0.0, -1.0, 0.0, 0.435295, 0.741481,
  0.46194, -0.5, 0.191342, 0.0, -1.0, 0.0, 0.308658, 0.96194,
  0.23097, -0.5, 0.0956708, 0.0, -1.0, 0.0, 0.404329, 0.73097,
  0.433013, -0.5, 0.25, 0.0, -1.0, 0.0, 0.25, 0.933013,
  0.216506, -0.5, 0.125, 0.0, -1.0, 0.0, 0.375, 0.716506,
  0.396677, -0.5, 0.304381, 0.0, -1.0, 0.0, 0.195619, 0.896677,
  0.198338, -0.5, 0.15219, 0.0, -1.0, 0.0, 0.34781, 0.698338,
  0.353553, -0.5, 0.353553, 0.0, -1.0, 0.0, 0.146447, 0.853553,
  0.176777, -0.5, 0.176777, 0.0, -1.0, 0.0, 0.323223, 0.676777,
  0.304381, -0.5, 0.396677, 0.0, -1.0, 0.0, 0.103323, 0.804381,
  0.15219, -0.5, 0.198338, 0.0, -1.0, 0.0, 0.301662, 0.65219,
  0.25, -0.5, 0.433013, 0.0, -1.0, 0.0, 0.0669873, 0.75,
  0.125, -0.5, 0.216506, 0.0, -1.0, 0.0, 0.283494, 0.625,
  0.191342, -0.5, 0.46194, 0.0, -1.0, 0.0, 0.0380602, 0.691342,
  0.0956709, -0.5, 0.23097, 0.0, -1.0, 0.0, 0.26903, 0.595671,
  0.12941, -0.5, 0.482963, 0.0, -1.0, 0.0, 0.0170371, 0.629409,
  0.0647048, -0.5, 0.241481, 0.0, -1.0, 0.0, 0.258519, 0.564705,
  0.0652632, -0.5, 0.495722, 0.0, -1.0, 0.0, 0.00427757, 0.565263,
  0.0326316, -0.5, 0.247861, 0.0, -1.0, 0.0, 0.252139, 0.532632,
  8.74228e-08, -0.5, 0.5, 0.0, -1.0, 0.0, 0.0, 0.5,
  4.37114e-08, -0.5, 0.25, 0.0, -1.0, 0.0, 0.25, 0.5,
  -0.0652629, -0.5, 0.495722, 0.0, -1.0, 0.0, 0.00427756, 0.434737,
  -0.0326315, -0.5, 0.247861, 0.0, -1.0, 0.0, 0.252139, 0.467368,
  -0.129409, -0.5, 0.482963, 0.0, -1.0, 0.0, 0.0170371, 0.37059,
  -0.0647047, -0.5, 0.241481, 0.0, -1.0, 0.0, 0.258519, 0.435295,
  -0.191342, -0.5, 0.46194, 0.0, -1.0, 0.0, 0.0380602, 0.308658,
  -0.0956708, -0.5, 0.23097, 0.0, -1.0, 0.0, 0.26903, 0.404329,
  -0.25, -0.5, 0.433013, 0.0, -1.0, 0.0, 0.0669873, 0.25,
  -0.125, -0.5, 0.216506, 0.0, -1.0, 0.0, 0.283494, 0.375,
  -0.304381, -0.5, 0.396677, 0.0, -1.0, 0.0, 0.103323, 0.195619,
  -0.15219, -0.5, 0.198338, 0.0, -1.0, 0.0, 0.301662, 0.34781,
  -0.353553, -0.5, 0.353553, 0.0, -1.0, 0.0, 0.146447, 0.146447,
  -0.176777, -0.5, 0.176777, 0.0, -1.0, 0.0, 0.323223, 0.323223,
  -0.396677, -0.5, 0.304381, 0.0, -1.0, 0.0, 0.195619, 0.103323,
  -0.198338, -0.5, 0.15219, 0.0, -1.0, 0.0, 0.34781, 0.301662,
  -0.433013, -0.5, 0.25, 0.0, -1.0, 0.0, 0.25, 0.0669873,
  -0.216506, -0.5, 0.125, 0.0, -1.0, 0.0, 0.375, 0.283494,
  -0.46194, -0.5, 0.191342, 0.0, -1.0, 0.0, 0.308658, 0.0380602,
  -0.23097, -0.5, 0.0956709, 0.0, -1.0, 0.0, 0.404329, 0.26903,
  -0.482963, -0.5, 0.12941, 0.0, -1.0, 0.0, 0.37059, 0.0170371,
  -0.241481, -0.5, 0.0647048, 0.0, -1.0, 0.0, 0.435295, 0.258519,
  -0.495722, -0.5, 0.0652631, 0.0, -1.0, 0.0, 0.434737, 0.00427756,
  -0.247861, -0.5, 0.0326316, 0.0, -1.0, 0.0, 0.467368, 0.252139,
  -0.5, -0.5, 8.74228e-08, 0.0, -1.0, 0.0, 0.5, 0.0,
  -0.25, -0.5, 4.37114e-08, 0.0, -1.0, 0.0, 0.5, 0.25,
  -0.495722, -0.5, -0.0652629, 0.0, -1.0, 0.0, 0.565263, 0.00427756,
  -0.247861, -0.5, -0.0326315, 0.0, -1.0, 0.0, 0.532632, 0.252139,
  -0.482963, -0.5, -0.129409, 0.0, -1.0, 0.0, 0.62941, 0.0170371,
  -0.241481, -0.5, -0.0647047, 0.0, -1.0, 0.0, 0.564705, 0.258519,
  -0.46194, -0.5, -0.191342, 0.0, -1.0, 0.0, 0.691342, 0.0380602,
  -0.23097, -0.5, -0.0956708, 0.0, -1.0, 0.0, 0.595671, 0.26903,
  -0.433013, -0.5, -0.25, 0.0, -1.0, 0.0, 0.75, 0.0669873,
  -0.216506, -0.5, -0.125, 0.0, -1.0, 0.0, 0.625, 0.283494,
  -0.396677, -0.5, -0.304381, 0.0, -1.0, 0.0, 0.804381, 0.103323,
  -0.198338, -0.5, -0.15219, 0.0, -1.0, 0.0, 0.65219, 0.301662,
  -0.353553, -0.5, -0.353553, 0.0, -1.0, 0.0, 0.853553, 0.146447,
  -0.176777, -0.5, -0.176777, 0.0, -1.0, 0.0, 0.676777, 0.323223,
  -0.304381, -0.5, -0.396677, 0.0, -1.0, 0.0, 0.896677, 0.195619,
  -0.15219, -0.5, -0.198338, 0.0, -1.0, 0.0, 0.698338, 0.34781,
  -0.25, -0.5, -0.433013, 0.0, -1.0, 0.0, 0.933013, 0.25,
  -0.125, -0.5, -0.216506, 0.0, -1.0, 0.0, 0.716506, 0.375,
  -0.191342, -0.5, -0.46194, 0.0, -1.0, 0.0, 0.96194, 0.308658,
  -0.0956709, -0.5, -0.23097, 0.0, -1.0, 0.0, 0.73097, 0.404329,
  -0.12941, -0.5, -0.482963, 0.0, -1.0, 0.0, 0.982963, 0.37059,
  -0.0647048, -0.5, -0.241481, 0.0, -1.0, 0.0, 0.741481, 0.435295,
  -0.0652631, -0.5, -0.495722, 0.0, -1.0, 0.0, 0.995722, 0.434737,
  -0.0326316, -0.5, -0.247861, 0.0, -1.0, 0.0, 0.747861, 0.467368,
  -8.74228e-08, -0.5, -0.5, 0.0, -1.0, 0.0, 1.0, 0.5,
  -4.37114e-08, -0.5, -0.25, 0.0, -1.0, 0.0, 0.75, 0.5
]

const elements = [
  [
    0, 3, 1,
    0, 2, 3,
    2, 5, 3,
    2, 4, 5,
    4, 7, 5,
    4, 6, 7,
    6, 9, 7,
    6, 8, 9,
    8, 11, 9,
    8, 10, 11,
    10, 13, 11,
    10, 12, 13,
    12, 15, 13,
    12, 14, 15,
    14, 17, 15,
    14, 16, 17,
    16, 19, 17,
    16, 18, 19,
    18, 21, 19,
    18, 20, 21,
    20, 23, 21,
    20, 22, 23,
    22, 25, 23,
    22, 24, 25,
    24, 27, 25,
    24, 26, 27,
    26, 29, 27,
    26, 28, 29,
    28, 31, 29,
    28, 30, 31,
    30, 33, 31,
    30, 32, 33,
    32, 35, 33,
    32, 34, 35,
    34, 37, 35,
    34, 36, 37,
    36, 39, 37,
    36, 38, 39,
    38, 41, 39,
    38, 40, 41,
    40, 43, 41,
    40, 42, 43,
    42, 45, 43,
    42, 44, 45,
    44, 47, 45,
    44, 46, 47,
    46, 49, 47,
    46, 48, 49,
    48, 51, 49,
    48, 50, 51,
    50, 53, 51,
    50, 52, 53,
    52, 55, 53,
    52, 54, 55,
    54, 57, 55,
    54, 56, 57,
    56, 59, 57,
    56, 58, 59,
    58, 61, 59,
    58, 60, 61,
    60, 63, 61,
    60, 62, 63,
    62, 65, 63,
    62, 64, 65,
    64, 67, 65,
    64, 66, 67,
    66, 69, 67,
    66, 68, 69,
    68, 71, 69,
    68, 70, 71,
    70, 73, 71,
    70, 72, 73,
    72, 75, 73,
    72, 74, 75,
    74, 77, 75,
    74, 76, 77,
    76, 79, 77,
    76, 78, 79,
    78, 81, 79,
    78, 80, 81,
    80, 83, 81,
    80, 82, 83,
    82, 85, 83,
    82, 84, 85,
    84, 87, 85,
    84, 86, 87,
    86, 89, 87,
    86, 88, 89,
    88, 91, 89,
    88, 90, 91,
    90, 93, 91,
    90, 92, 93,
    92, 95, 93,
    92, 94, 95,
    94, 97, 95,
    94, 96, 97
  ],
  [
    98, 101, 99,
    98, 100, 101,
    100, 103, 101,
    100, 102, 103,
    102, 105, 103,
    102, 104, 105,
    104, 107, 105,
    104, 106, 107,
    106, 109, 107,
    106, 108, 109,
    108, 111, 109,
    108, 110, 111,
    110, 113, 111,
    110, 112, 113,
    112, 115, 113,
    112, 114, 115,
    114, 117, 115,
    114, 116, 117,
    116, 119, 117,
    116, 118, 119,
    118, 121, 119,
    118, 120, 121,
    120, 123, 121,
    120, 122, 123,
    122, 125, 123,
    122, 124, 125,
    124, 127, 125,
    124, 126, 127,
    126, 129, 127,
    126, 128, 129,
    128, 131, 129,
    128, 130, 131,
    130, 133, 131,
    130, 132, 133,
    132, 135, 133,
    132, 134, 135,
    134, 137, 135,
    134, 136, 137,
    136, 139, 137,
    136, 138, 139,
    138, 141, 139,
    138, 140, 141,
    140, 143, 141,
    140, 142, 143,
    142, 145, 143,
    142, 144, 145,
    144, 147, 145,
    144, 146, 147,
    146, 149, 147,
    146, 148, 149,
    148, 151, 149,
    148, 150, 151,
    150, 153, 151,
    150, 152, 153,
    152, 155, 153,
    152, 154, 155,
    154, 157, 155,
    154, 156, 157,
    156, 159, 157,
    156, 158, 159,
    158, 161, 159,
    158, 160, 161,
    160, 163, 161,
    160, 162, 163,
    162, 165, 163,
    162, 164, 165,
    164, 167, 165,
    164, 166, 167,
    166, 169, 167,
    166, 168, 169,
    168, 171, 169,
    168, 170, 171,
    170, 173, 171,
    170, 172, 173,
    172, 175, 173,
    172, 174, 175,
    174, 177, 175,
    174, 176, 177,
    176, 179, 177,
    176, 178, 179,
    178, 181, 179,
    178, 180, 181,
    180, 183, 181,
    180, 182, 183,
    182, 185, 183,
    182, 184, 185,
    184, 187, 185,
    184, 186, 187,
    186, 189, 187,
    186, 188, 189,
    188, 191, 189,
    188, 190, 191,
    190, 193, 191,
    190, 192, 193,
    192, 195, 193,
    192, 194, 195
  ],
  [
    196, 199, 197,
    196, 198, 199,
    198, 201, 199,
    198, 200, 201,
    200, 203, 201,
    200, 202, 203,
    202, 205, 203,
    202, 204, 205,
    204, 207, 205,
    204, 206, 207,
    206, 209, 207,
    206, 208, 209,
    208, 211, 209,
    208, 210, 211,
    210, 213, 211,
    210, 212, 213,
    212, 215, 213,
    212, 214, 215,
    214, 217, 215,
    214, 216, 217,
    216, 219, 217,
    216, 218, 219,
    218, 221, 219,
    218, 220, 221,
    220, 223, 221,
    220, 222, 223,
    222, 225, 223,
    222, 224, 225,
    224, 227, 225,
    224, 226, 227,
    226, 229, 227,
    226, 228, 229,
    228, 231, 229,
    228, 230, 231,
    230, 233, 231,
    230, 232, 233,
    232, 235, 233,
    232, 234, 235,
    234, 237, 235,
    234, 236, 237,
    236, 239, 237,
    236, 238, 239,
    238, 241, 239,
    238, 240, 241,
    240, 243, 241,
    240, 242, 243,
    242, 245, 243,
    242, 244, 245,
    244, 247, 245,
    244, 246, 247,
    246, 249, 247,
    246, 248, 249,
    248, 251, 249,
    248, 250, 251,
    250, 253, 251,
    250, 252, 253,
    252, 255, 253,
    252, 254, 255,
    254, 257, 255,
    254, 256, 257,
    256, 259, 257,
    256, 258, 259,
    258, 261, 259,
    258, 260, 261,
    260, 263, 261,
    260, 262, 263,
    262, 265, 263,
    262, 264, 265,
    264, 267, 265,
    264, 266, 267,
    266, 269, 267,
    266, 268, 269,
    268, 271, 269,
    268, 270, 271,
    270, 273, 271,
    270, 272, 273,
    272, 275, 273,
    272, 274, 275,
    274, 277, 275,
    274, 276, 277,
    276, 279, 277,
    276, 278, 279,
    278, 281, 279,
    278, 280, 281,
    280, 283, 281,
    280, 282, 283,
    282, 285, 283,
    282, 284, 285,
    284, 287, 285,
    284, 286, 287,
    286, 289, 287,
    286, 288, 289,
    288, 291, 289,
    288, 290, 291,
    290, 293, 291,
    290, 292, 293
  ],
  [
    294, 297, 295,
    294, 296, 297,
    296, 299, 297,
    296, 298, 299,
    298, 301, 299,
    298, 300, 301,
    300, 303, 301,
    300, 302, 303,
    302, 305, 303,
    302, 304, 305,
    304, 307, 305,
    304, 306, 307,
    306, 309, 307,
    306, 308, 309,
    308, 311, 309,
    308, 310, 311,
    310, 313, 311,
    310, 312, 313,
    312, 315, 313,
    312, 314, 315,
    314, 317, 315,
    314, 316, 317,
    316, 319, 317,
    316, 318, 319,
    318, 321, 319,
    318, 320, 321,
    320, 323, 321,
    320, 322, 323,
    322, 325, 323,
    322, 324, 325,
    324, 327, 325,
    324, 326, 327,
    326, 329, 327,
    326, 328, 329,
    328, 331, 329,
    328, 330, 331,
    330, 333, 331,
    330, 332, 333,
    332, 335, 333,
    332, 334, 335,
    334, 337, 335,
    334, 336, 337,
    336, 339, 337,
    336, 338, 339,
    338, 341, 339,
    338, 340, 341,
    340, 343, 341,
    340, 342, 343,
    342, 345, 343,
    342, 344, 345,
    344, 347, 345,
    344, 346, 347,
    346, 349, 347,
    346, 348, 349,
    348, 351, 349,
    348, 350, 351,
    350, 353, 351,
    350, 352, 353,
    352, 355, 353,
    352, 354, 355,
    354, 357, 355,
    354, 356, 357,
    356, 359, 357,
    356, 358, 359,
    358, 361, 359,
    358, 360, 361,
    360, 363, 361,
    360, 362, 363,
    362, 365, 363,
    362, 364, 365,
    364, 367, 365,
    364, 366, 367,
    366, 369, 367,
    366, 368, 369,
    368, 371, 369,
    368, 370, 371,
    370, 373, 371,
    370, 372, 373,
    372, 375, 373,
    372, 374, 375,
    374, 377, 375,
    374, 376, 377,
    376, 379, 377,
    376, 378, 379,
    378, 381, 379,
    378, 380, 381,
    380, 383, 381,
    380, 382, 383,
    382, 385, 383,
    382, 384, 385,
    384, 387, 385,
    384, 386, 387,
    386, 389, 387,
    386, 388, 389,
    388, 391, 389,
    388, 390, 391
  ]
]

const _SCNTubeData = {
  source: source,
  elements: elements
}
export default _SCNTubeData
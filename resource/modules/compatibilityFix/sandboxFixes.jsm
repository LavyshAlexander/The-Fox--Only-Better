/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// VERSION 1.0.6

Modules.LOADMODULE = function() {
	AddonManager.getAddonByID('{64161300-e22b-11db-8314-0800200c9a66}', function(addon) {
		Modules.loadIf('compatibilityFix/speedDial', (addon && addon.isActive));
	});

	AddonManager.getAddonByID('{77d2ed30-4cd2-11e0-b8af-0800200c9a66}', function(addon) {
		Modules.loadIf('compatibilityFix/FTDeepDark', (addon && addon.isActive));
	});

	AddonManager.getAddonByID('ClassicThemeRestorer@ArisT2Noia4dev', function(addon) {
		Modules.loadIf('compatibilityFix/CTR', (addon && addon.isActive));
	});

	AddonManager.getAddonByID('forecastfox@s3_fix_version', function(addon) {
		Modules.loadIf('compatibilityFix/Forecastfox', (addon && addon.isActive));
	});

	Modules.load('compatibilityFix/ASI');
	Modules.load('compatibilityFix/oneOffSearches');
};

Modules.UNLOADMODULE = function() {
	Modules.unload('compatibilityFix/speedDial');
	Modules.unload('compatibilityFix/FTDeepDark');
	Modules.unload('compatibilityFix/CTR');
	Modules.unload('compatibilityFix/ASI');
	Modules.unload('compatibilityFix/Forecastfox');
	Modules.unload('compatibilityFix/oneOffSearches');
};

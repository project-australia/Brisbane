platform :android do
  desc 'Build the Android application.'
  private_lane :build do
    gradle(task: 'clean', project_dir: 'android/')
    gradle(task: 'assemble', build_type: 'Release', project_dir: 'android/')
  end

  desc "Runs all the tests"
  lane :test do
    gradle(task: "test")
  end

  desc "Deploy a new version to the Google Play"
  lane :deploy do
    gradle(task: "clean assembleRelease")
    upload_to_play_store
  end
end

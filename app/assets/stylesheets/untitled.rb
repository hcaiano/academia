

if current_user.wants_to_apply_to?(:academia_de_codigo)
	current_user.complete_challenge
end

before_action :learn_ruby

def learn_ruby # Estimated Time 1 hour
	redirect_to "http://www.codecademy.com/ruby"
end


after_action :complete_challenge

def complete_challenge # You are being timed for this test as soon as you hit the start button
	use_form "http://www.codecademy.com/ruby"
end
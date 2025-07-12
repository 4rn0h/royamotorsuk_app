from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ChatMessage

class ChatBotAPIView(APIView):
    def post(self, request):
        user_message = request.data.get('message')
        # Placeholder: echo response
        bot_response = f"You said: {user_message}"
        ChatMessage.objects.create(message=user_message, response=bot_response)
        return Response({'response': bot_response})

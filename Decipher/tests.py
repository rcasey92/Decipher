# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime
from django.test import TestCase
from django.core.urlresolvers import reverse
from django.utils import timezone
from.models import Question
# Create your tests here.

def create_question(question_text, days):
    time = timezone.now() + datetime.timedelta(days = days)
    return Question.objects.create(question_text = question_text, pub_date = time)

class QuestionViewTests(TestCase):
    """
    If no questions exist, an appropriate message should be displayed.
    """
    def test_index_view_with_no_questions(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "No polls are available.")
        self.assertQuerysetEqual(response.context['latest_question_list'], [])
